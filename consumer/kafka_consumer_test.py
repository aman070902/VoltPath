import os
import base64
import json
import psycopg2
from dotenv import load_dotenv
from kafka import KafkaConsumer
import socket

def load_env_variables():
    load_dotenv()

    db_host = os.getenv('DB_HOST', 'localhost')
    db_port = os.getenv('DB_PORT', '30002')  # Default NodePort
    db_name = os.getenv('DB_NAME', 'voltpathdb')
    db_user = os.getenv('DB_USER', 'postgres')
    db_password = os.getenv('DB_PASSWORD', '')

    # Try detecting if localhost:5432 (typical port-forward) is available
    try:
        with socket.create_connection(("localhost", 5432), timeout=1):
            print("[INFO] Detected local port-forward to Postgres at localhost:5432. Using it.")
            db_host = "localhost"
            db_port = "5432"
    except Exception:
        print("[INFO] No port-forward detected. Using NodePort or remote DB settings.")

    return {
        'DB_HOST': db_host,
        'DB_PORT': db_port,
        'DB_NAME': db_name,
        'DB_USER': db_user,
        'DB_PASSWORD': db_password
    }

# def load_env_variables():
#     load_dotenv()
    
#     return {
#         'DB_HOST': os.getenv('DB_HOST', 'localhost'),
#         'DB_PORT': os.getenv('DB_PORT', '30002'),
#         'DB_NAME': os.getenv('DB_NAME', 'voltpathdb'),
#         'DB_USER': os.getenv('DB_USER', 'postgres'),
#         'DB_PASSWORD': os.getenv('DB_PASSWORD', '')
#     }

def create_consumer(topic, bootstrap_servers='localhost:9092'):
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

def insert_connector_data(cursor, station):
    connectors = station.get("Connections", [])
    address_info = station.get("AddressInfo", {})

    for conn in connectors:
        cursor.execute(
            """
            INSERT INTO connectors (
                connector_id, station_id, connector_type, power_kw, latitude, longitude, status_type
            ) VALUES (%s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (connector_id) DO NOTHING
            """,
            (
                conn.get("ID"),
                station.get("ID"),
                conn.get("ConnectionType", {}).get("Title"),
                conn.get("PowerKW"),
                address_info.get("Latitude"),
                address_info.get("Longitude"),
                conn.get("StatusType", {}).get("Title")
            )
        )

def process_station(cursor, station):
    insert_station_data(cursor, station)
    insert_connector_data(cursor, station)

def main():
    db_config = load_env_variables()
    consumer = create_consumer(topic='chargingstationdata')
    conn = create_db_connection(db_config)
    cursor = conn.cursor()

    for message in consumer:
        station = message.value
        process_station(cursor, station)
        print(f"Inserted station and connectors for station ID: {station.get('ID')}")

if __name__ == "__main__":
    main()
