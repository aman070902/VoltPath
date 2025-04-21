# import os
# import json
# import requests
# from dotenv import load_dotenv
# from kafka import KafkaProducer
# from fastapi import FastAPI, HTTPException

# app = FastAPI()

# def load_env_variables():
#     load_dotenv()
#     api_key = os.getenv('API_KEY')
#     if not api_key:
#         raise HTTPException(status_code=500, detail="API_KEY not found in .env file.")
#     return api_key

# def create_producer(bootstrap_servers='localhost:9092'):
#     try:
#         producer = KafkaProducer(
#             bootstrap_servers=bootstrap_servers,
#             value_serializer=lambda v: json.dumps(v).encode('utf-8')
#         )
#         return producer
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Kafka connection failed: {str(e)}")

# def fetch_stations(api_key, latitude=40.7209, longitude=-74.0007, distance=10):
#     API_URL = 'https://api.openchargemap.io/v3/poi/'

#     params = {
#         "output": "json",
#         "countrycode": "US",
#         "maxresults": 10,
#         "key": api_key,
#         "latitude": latitude,
#         "longitude": longitude,
#         "distance": distance,
#         "distance_unit": "km",
#         "verbose": "false",
#         "opendata": "true",
#         "statustypeid": 50
#     }

#     try:
#         response = requests.get(API_URL, params=params)
#         response.raise_for_status()  # Raise an exception for 4xx/5xx responses
#         return response.json()
#     except requests.RequestException as e:
#         raise HTTPException(status_code=500, detail=f"Failed to fetch stations: {str(e)}")

# def send_stations_to_kafka(producer, topic, stations):
#     for station in stations:
#         producer.send(topic, station)
#         station_id = station.get("ID", "N/A")
#         address = station.get("AddressInfo", {}).get("Title", "N/A")
#         city = station.get("AddressInfo", {}).get("Town", "N/A")
#         print(f"Station ID: {station_id}")
#         print(f"Station Address: {address}")
#         print(f"Station City: {city}")
#         print(f"Sent station: {station.get('Title', 'Unknown Title')}")
#     producer.flush()

# @app.post("/send_stations/")
# async def send_stations():
#     try:
#         api_key = load_env_variables()
#         producer = create_producer()
#         stations = fetch_stations(api_key)
#         send_stations_to_kafka(producer, topic='chargingstationdata', stations=stations)
#         return {"message": "Stations sent to Kafka successfully!"}
#     except HTTPException as e:
#         raise e  # FastAPI will automatically handle this
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

import os
import json
import requests
from dotenv import load_dotenv
from kafka import KafkaProducer
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for frontend dev environment
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load API key from .env
def load_env_variables():
    load_dotenv()
    api_key = os.getenv('API_KEY')
    if not api_key:
        raise HTTPException(status_code=500, detail="API_KEY not found in .env file.")
    return api_key

# Create Kafka producer
def create_producer(bootstrap_servers='localhost:9092'):
    try:
        producer = KafkaProducer(
            bootstrap_servers=bootstrap_servers,
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )
        return producer
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Kafka connection failed: {str(e)}")

# Fetch stations from OpenChargeMap
def fetch_stations(api_key, latitude: float, longitude: float, distance: int = 10):
    API_URL = 'https://api.openchargemap.io/v3/poi/'

    params = {
        "output": "json",
        "countrycode": "US",
        "maxresults": 10,
        "key": api_key,
        "latitude": latitude,
        "longitude": longitude,
        "distance": distance,
        "distance_unit": "km",
        "verbose": "false",
        "opendata": "true",
        "statustypeid": 50
    }

    try:
        response = requests.get(API_URL, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch stations: {str(e)}")

# Send each station to Kafka topic
def send_stations_to_kafka(producer, topic, stations):
    for station in stations:
        producer.send(topic, station)
        print(f"Sent station ID: {station.get('ID', 'N/A')} to Kafka")
    producer.flush()

# FastAPI route
@app.post("/send_stations/")
async def send_stations(
    latitude: float = Query(...),
    longitude: float = Query(...),
    distance: int = Query(10)
):
    try:
        print(f"📍 Received: lat={latitude}, lng={longitude}, distance={distance}")
        api_key = load_env_variables()
        print(f"✅ Loaded API key: {api_key}")
        producer = create_producer()
        print(f"🚀 Kafka producer created")
        stations = fetch_stations(api_key, latitude, longitude, distance)
        print(f"📦 Fetched {len(stations)} stations")
        send_stations_to_kafka(producer, topic='chargingstationdata', stations=stations)
        return {
            "message": "Stations sent to Kafka successfully!",
            "station_count": len(stations),
            "stations": stations
        }
    except Exception as e:
        print(f"❌ ERROR: {e}")
        raise HTTPException(status_code=500, detail=f"Server Error: {str(e)}")

