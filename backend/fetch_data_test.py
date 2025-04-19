import requests
import os
from dotenv import load_dotenv
import math

load_dotenv()

# Fetch OpenChargeMap Data
API_KEY = os.getenv('API_KEY')
API_URL= 'https://api.openchargemap.io/v3/poi/'

# Parameters for Data
# STL
# LATITUDE = 38.647717  
# LONGITUDE = -90.279238

# NY
LATITUDE = 40.7209 
LONGITUDE = -74.0007

DISTANCE = 10  # in km

params = {
        "output": "json",
        "countrycode": "US",
        "maxresults": 10,  # you can increase this
        "key": API_KEY,
        "latitude":LATITUDE,
        "longitude":LONGITUDE,
        "distance": DISTANCE,
        "distance_unit": "km", # you can change to miles with m
        "verbose": "false",
        "opendata":"true",
        "statustypeid":50
}
    

def fetch_and_push_data():
    try:
        # Make the API request
        response = requests.get(API_URL, params=params)

        # Check if the response was successful (status code 200)
        if response.status_code == 200:
            # Parse the response
            stations = response.json()

            if not stations:
                print("No stations found.")
            else:
                
                # Loop through each station and print formatted information
                for station in stations:
                    
                    # Extracting relevant information
                    distance = station.get("Distance", "N/A")
                    station_lat = station.get("AddressInfo", {}).get("Latitude", None)
                    station_lon = station.get("AddressInfo", {}).get("Longitude", None)
                    if distance == "N/A":
                        if station_lat is not None and station_lon is not None:
                            distance = haversine_distance(LATITUDE, LONGITUDE, station_lat, station_lon)
                        else:
                            continue  # Skip if station has no coordinates
                    
                    station_id = station.get("ID", "N/A")
                    title = station.get("Title", "N/A")
                    address = station.get("AddressInfo", {}).get("Title", "N/A")
                    postcode = station.get("AddressInfo", {}).get("Postcode", "N/A")
                    city = station.get("AddressInfo", {}).get("Town", "N/A")
                    state = station.get("AddressInfo", {}).get("StateOrProvince", "N/A")
                    country = station.get("AddressInfo", {}).get("Country", {}).get("Title", "N/A")
                    usage_type = station.get("UsageType", {}).get("Title", "N/A")
                    status = station.get("StatusType", {}).get("Title", "N/A")
                    number_of_points = station.get("NumberOfPoints", "N/A")
                    status_type_id = station.get("StatusTypeID", "N/A")
                    contact_phone = station.get("AddressInfo", {}).get("ContactPhone", "N/A")
                    contact_email = station.get("AddressInfo", {}).get("ContactEmail", "N/A")
                    operator_name = station.get("OperatorName", "N/A")
                    
                    # Extract connector details (if available)
                    connectors = station.get('Connections', [])
                    connector_info = []

                    for conn in connectors:
                        connector_details = {
                            'Connector Type': conn.get('ConnectionType', {}).get('Title', 'N/A'),
                            'Power (kW)': conn.get('PowerKW', 'N/A'),
                            'Status': conn.get('StatusType', {}).get('Title', 'N/A') if conn.get('StatusType') else 'N/A',
                            'Connector Latitude': conn.get('Location', {}).get('Latitude', 'N/A'),
                            'Connector Longitude': conn.get('Location', {}).get('Longitude', 'N/A')
                        }
                        connector_info.append(connector_details)
                    
                    # Add connector information to station info
                    station['Connectors'] = connector_info
                    
                    # Prepare station data for display
                    station_info = {
                        "Station Name": title,
                        "Latitude": station_lat,
                        "Longitude": station_lon,
                        "Postcode": postcode,
                        "Number of Points": number_of_points,
                        "StatusTypeID": status_type_id,
                        "Contact Phone": contact_phone,
                        "Contact Email": contact_email,
                        "Operator Name": operator_name,
                        "Connectors": connector_info
                    }
                        
                    # Format and print the station information
                    print(f"Station ID: {station_id}")
                    print(f"Title: {title}")
                    print(f"Address: {address}")
                    print(f"Postcode: {postcode}")
                    print(f"City: {city}")
                    print(f"State: {state}")
                    print(f"Country: {country}")
                    print(f"Usage Type: {usage_type}")
                    print(f"Status: {status}")
                    print(f"Distance: {distance} km")
                    print(f"Latitude: {station_lat}")
                    print(f"Longitude: {station_lon}")
                    print(f"Number of Points: {number_of_points}")
                    print(f"Status Type ID: {status_type_id}")
                    print(f"Contact Phone: {contact_phone}")
                    print(f"Contact Email: {contact_email}")
                    print(f"Operator Name: {operator_name}")
                    print(f"Connector Details: {connector_details}")
                    print(f"{title} ({distance:.2f} km) - {status}")
                    print("-" * 40)  # Separator line between stations
                    
                    
        else:
            # If the response status is not 200, print the error code
            print(f"Error: Received status code {response.status_code}. The request failed.")
            
    except requests.exceptions.RequestException as e:
        # Handle any request exceptions (e.g., network errors, timeouts, etc.)
        print(f"Error occurred: {e}")


def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Earth radius in kilometers

    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)

    a = math.sin(delta_phi/2)**2 + \
        math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda/2)**2

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

    distance = R * c
    return distance

# Run the function to fetch data and push it to Google Sheets
def main():
    """Main function to execute the script."""
    fetch_and_push_data()

if __name__ == "__main__":
    main()