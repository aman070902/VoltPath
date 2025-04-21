import os
import json
import requests
from dotenv import load_dotenv
from kafka import KafkaProducer

def load_env_variables():
    load_dotenv()
    return os.getenv('API_KEY')

def create_producer():
    bootstrap_servers = os.getenv("KAFKA_BOOTSTRAP_SERVERS", "localhost:9092")
    try:
        producer = KafkaProducer(
            bootstrap_servers=bootstrap_servers,
            value_serializer=lambda v: json.dumps(v).encode("utf-8")
        )
        return producer
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Kafka connection failed: {str(e)}")


def fetch_stations(api_key, latitude=40.7209, longitude=-74.0007, distance=10):
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
        "statustypeid": 50 # 50 means its operational and 0 is not
    }

    response = requests.get(API_URL, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch stations. Status Code: {response.status_code}")
        return []

def send_stations_to_kafka(producer, topic, stations):
    for station in stations:
        producer.send(topic, station)
        station_id = station.get("ID", "N/A")
        address = station.get("AddressInfo", {}).get("Title", "N/A")
        city = station.get("AddressInfo", {}).get("Town", "N/A")
        print(f"Station ID: {station_id}")
        print(f"Station Address: {address}")
        print(f"Station City: {city}")
        print(f"Sent station: {station.get('Title', 'Unknown Title')}")
    producer.flush()

def main():
    api_key = load_env_variables()
    producer = create_producer()
    stations = fetch_stations(api_key)
    send_stations_to_kafka(producer, topic='chargingstationdata', stations=stations)

if __name__ == "__main__":
    main()
