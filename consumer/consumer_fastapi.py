import os
import json
import psycopg2
from dotenv import load_dotenv
from kafka import KafkaConsumer
from fastapi import FastAPI

app = FastAPI()

def load_env_variables():
    load_dotenv()

    db_host = os.getenv('DB_HOST', 'postgres-1.cvyc2yuysj0z.us-east-2.rds.amazonaws.com')
    db_port = os.getenv('DB_PORT', '5432')  # Adjust if needed
    db_name = os.getenv('DB_NAME', 'voltpathdb')
    db_user = os.getenv('DB_USER', 'postgres')
    db_password = os.getenv('DB_PASSWORD', '')

    return {
        'DB_HOST': db_host,
        'DB_PORT': db_port,
        'DB_NAME': db_name,
        'DB_USER': db_user,
        'DB_PASSWORD': db_password
    }

def create_consumer(topic, bootstrap_servers='kafka:9092'):
    return KafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        value_deserializer=lambda v: json.loads(v.decode('utf-8')),
        auto_offset_reset='earliest',
        enable_auto_commit=True,
        group_id='charging-data-consumer-group'
    )

def create_db_connection(db_config):
    conn = psycopg2.connect(
        host=db_config['DB_HOST'],
        port=db_config['DB_PORT'],
        dbname=db_config['DB_NAME'],
        user=db_config['DB_USER'],
        password=db_config['DB_PASSWORD']
    )
    conn.autocommit = True
    return conn

def insert_station_data(cursor, station):
    address_info = station.get("AddressInfo", {})
    title = station.get("Title") or "Untitled Station"
    usage_type = station.get("UsageType", {}).get("Title")
    status = station.get("StatusType", {}).get("Title")
    status_type_id = station.get("StatusTypeID")
    number_of_points = station.get("NumberOfPoints")
    operator_name = station.get("OperatorInfo", {}).get("Title")

    cursor.execute(
        """
        INSERT INTO stations (
            id, title, address, postcode, city, state, country, usage_type,
            status, status_type_id, number_of_points, contact_phone, contact_email, operator_name
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (id) DO NOTHING
        """,
        (
            station.get("ID"),
            title,
            address_info.get("Title"),
            address_info.get("Postcode"),
            address_info.get("Town"),
            address_info.get("StateOrProvince"),
            address_info.get("Country", {}).get("Title"),
            usage_type,
            status,
            status_type_id,
            number_of_points,
            address_info.get("ContactTelephone1"),
            address_info.get("ContactEmail"),
            operator_name
        )
    )

def process_station(cursor, station):
    insert_station_data(cursor, station)

@app.get("/consume_stations/")
async def consume_stations():
    db_config = load_env_variables()
    consumer = create_consumer(topic='chargingstationdata')
    conn = create_db_connection(db_config)
    cursor = conn.cursor()

    for message in consumer:
        station = message.value
        process_station(cursor, station)
        print(f"Inserted station data for station ID: {station.get('ID')}")
    return {"message": "Processing Kafka messages and inserting data into PostgreSQL"}