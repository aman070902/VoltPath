import requests
from google.oauth2 import service_account
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

# Fetch OpenChargeMap Data
API_KEY = '1b1c0a43-f82d-4dc0-9461-6e3dbad2a7d1'
API_URL= 'https://api.openchargemap.io/v3/poi/'

#Google Sheets Information
SPREADSHEET_ID = "1ChOWU9EpYPcyzPktd60G-6sYOO-kAGGCwtldk4YEw78"
SHEET_RANGE = 'Sheet1!A2:M'  # Assuming columns A to M
# Path to your service account JSON key file
SERVICE_ACCOUNT_FILE = "/Users/eddysul/Documents/cse427/VoltPath/config/voltpath-36675ee707c3.json"

# Authenticate with Google Sheets API
credentials = Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE,
    scopes=["https://www.googleapis.com/auth/spreadsheets"]
)
service = build('sheets', 'v4', credentials=credentials)

# Parameters for Data
LATITUDE = 38.647717  
LONGITUDE = -90.279238
DISTANCE = 10  # in km

params = {
        "output": "json",
        "countrycode": "US",
        "maxresults": 10,  # you can increase this
        "key": API_KEY,
        "latitude":LATITUDE,
        "longitude":LONGITUDE,
        "distance": DISTANCE,
        "distance_unit": "km" # you can change to miles with m
}


def append_to_google_sheets(data):
    # """Append data to Google Sheets"""
    try:
        # Prepare the data in a format suitable for Sheets API
        body = {
            "values": data
        }
        
        #Call the Sheets API to append data
        result = service.spreadsheets().values().append(
            spreadsheetId=SPREADSHEET_ID,
            range=SHEET_RANGE,
            valueInputOption="RAW",
            body=body
        ).execute()
        
        print(f"{result.get('updates').get('updatedCells')} cells updated.")
        
    except Exception as e:
        print(f"Error occurred while pushing to Google Sheets: {e}")
        

def fetch_and_push_data():
    # """Fetch data from OpenChargeMap and push it to Google Sheets."""
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
                sheet_data = []
                
                # Header for the Google Sheets columns
                header = ['Station ID', 'Title', 'Address', 'City', 'State', 'Country', 'Usage Type', 'Status', 'Distance', 'Connector Type', 'Power (kW)', 'Connector Status']
                sheet_data.append(header)  # Add the header row
                
                # Loop through each station and print formatted information
                for station in stations:
                    
                    # Extracting relevant information
                    station_id = station.get("ID", "N/A")
                    title = station.get("Title", "N/A")
                    address = station.get("AddressInfo", {}).get("Title", "N/A")
                    city = station.get("AddressInfo", {}).get("Town", "N/A")
                    state = station.get("AddressInfo", {}).get("StateOrProvince", "N/A")
                    country = station.get("AddressInfo", {}).get("Country", {}).get("Title", "N/A")
                    usage_type = station.get("UsageType", {}).get("Title", "N/A")
                    status = station.get("StatusType", {}).get("Title", "N/A")
                    distance = station.get("Distance", "N/A")
                    
                    # Extract connector details (if available)
                    connectors = station.get('Connections', [])
                    connector_info = []

                    for conn in connectors:
                        connector_details = {
                            'Connector Type': conn.get('ConnectionType', {}).get('Title', 'N/A'),
                            'Power (kW)': conn.get('PowerKW', 'N/A'),
                            'Status': conn.get('StatusType', {}).get('Title', 'N/A') if conn.get('StatusType') else 'N/A'
                        }
                        connector_info.append(connector_details)
                    
                    # Add connector information to station info
                    station['Connectors'] = connector_info
                    
                    # Add connector information to station data
                    for conn in connector_info:
                        row = [
                            station_id,
                            title,
                            address,
                            city,
                            state,
                            country,
                            usage_type,
                            status,
                            distance,
                            conn['Connector Type'],
                            conn['Power (kW)'],
                            conn['Status']
                        ]
                        sheet_data.append(row)
                        
                    # Format and print the station information
                    print(f"Station ID: {station_id}")
                    print(f"Title: {title}")
                    print(f"Address: {address}")
                    print(f"City: {city}")
                    print(f"State: {state}")
                    print(f"Country: {country}")
                    print(f"Usage Type: {usage_type}")
                    print(f"Status: {status}")
                    print(f"Distance: {distance} km")
                    print(f"Connector Details: {connector_details}")
                    print("-" * 40)  # Separator line between stations
                        
                # Push the data to Google Sheets
                append_to_google_sheets(sheet_data)
                    
                    
        else:
            # If the response status is not 200, print the error code
            print(f"Error: Received status code {response.status_code}. The request failed.")
            
    except requests.exceptions.RequestException as e:
        # Handle any request exceptions (e.g., network errors, timeouts, etc.)
        print(f"Error occurred: {e}")

# Run the function to fetch data and push it to Google Sheets
def main():
    """Main function to execute the script."""
    fetch_and_push_data()

if __name__ == "__main__":
    main()