# VoltPath - EV Route Navigation

![VoltPath Landing Page](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-05%20at%202.24.42%E2%80%AFAM-u5kFpnwwISjBWdwzFtWv2qQXxFvIXy.png)
VoltPath is a modern web application for EV route navigation, providing AI-powered route planning with real-time charging station data, traffic conditions, and weather updates.

## Quick Start Commands

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/your-username/voltpath.git
cd voltpath

# Install dependencies
npm install

# Run development server
npm run dev
```

# Fetching Data From OpenChargeMap API and Pushing to Google Sheets Guideline

## Step-by-Step Instructions

### 1. Go to Google Cloud Console
Visit the [Google Cloud Console](https://console.cloud.google.com/) and creata a Google Cloud account.

### 2. Create a New Project
1. In the Google Cloud Console, click on the **project dropdown** (top-left of the console).
2. Select **New Project**.
3. Give your project a name.
4. Click **Create** to create the new project.

### 3. Select Your Project
After creating your new project, ensure it's selected in the project dropdown at the top of the page.

### 4. Enable the Google Sheets API
1. In the left sidebar or in the search bar, navigate to **APIs & Services**.
2. Click **+ ENABLE APIS AND SERVICES** at the top of the page.
3. In the API Library, search for **Google Sheets API**.
4. Select the **Google Sheets API** from the search results and click **Enable**.

### 5. Create a Service Account
1. Go to the **Credentials** page from the left sidebar under **APIs & Services**.
2. Click **Create Credentials** and select **Service Account**.
3. Enter a name for the service account (e.g., `google-sheets-service-account`).
4. Click **Create**.

### 6. Assign Role to Service Account
1. In the **Grant this service account access to project** step, select the **Project > Owner** role to provide full access.
2. Click **Continue**.

### 7. Generate the Service Account Key
1. After creating the service account, you’ll see it listed on the **Service Accounts** page.
2. Click on your newly created service account.
3. Go to the **Keys** tab.
4. Click **Add Key** and select **Create New Key**.
5. Choose **JSON** format for the key and click **Create**.
6. The key file will automatically download to your computer. **Keep this file safe**, as it contains credentials that allow access to your Google Sheets data.

### 8. Use the JSON Key in Your Code
Use the downloaded JSON key in your application to authenticate and access the Google Sheets API. The key will typically be used in your code like so:

```python
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Define the scope of access
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

# Authenticate using the JSON key file
credentials = ServiceAccountCredentials.from_json_keyfile_name('path/to/your/service-account-key.json', scope)
client = gspread.authorize(credentials)

# Access Google Sheets
sheet = client.open('Your Spreadsheet Name').sheet1
```


## Commands of Dependencies to Install
Here are some other commands for dependencies to install after creating google sheets api.

```bash
# Install dependencies
pip install google-api-python-client gspread oauth2client requests

# Run python script to fetch data and push to google sheets directly
python3 backend/fetch_data.py
```
## Using fetch_data.py
1. Spreadsheet ID:
  - When using the fetch_data.py file, change the SPREADSHEET_ID to your spreadsheet ID which can be found in the url after /d/ and before /edit.
  - For example my google spreadsheet url is: https://docs.google.com/spreadsheets/d/1ChOWU9EpYPcyzPktd60G-6sYOO-kAGGCwtldk4YEw78/edit?gid=0#gid=0
  - So the spreadsheet ID would be 1ChOWU9EpYPcyzPktd60G-6sYOO-kAGGCwtldk4YEw78.
2. SERVICE_ACCOUNT_FILE
  - make sure to change service account file to your file that you got from google console.
3. Parameters
  - adjust parameters to your liking for fetching requests.
  - Here is list of Open Charge Map api documentation: https://openchargemap.org/site/develop/api#/operations/get-poi
  - I already put my api key in for you to use, but if you want you can register your own.


## New Changes 4/19
1. Install Dependencies
```bash
# Install dependencies
pip install requests python-dotenv psycopg2-binary kafka-python
```
2. Important Files to Look At
### backend/fetch_data_test.py
- This file is for testing fetching data with the OpenChargeMap API. You can change parameters in the params and longitude, latitude to get whatever information you want.
- Run python3 backend/fetch_data_test.py when you want to test.
### producer/kafka_producer_test.py
- The producer directory includes all related files for the kafka producer which fetches data from the OpenChargeMap API, parses it and pushes to Kafka Topic
### consumer/kafka_consumer_test.py
- The consumer directory includes all related files for the kafka consumer which takes the incoming messages and parses it and inserts the data into the PostgreSQL database.
### PostgreSQL DB
- The PostgreSQL database contains 2 tables: stations and connectors
- stations contains information about the ev charging stations like address, location, id, etc.
- connectors contains information about the connectors for each charging station like power, connector type, etc.



## ✅ VoltPath Setup Guide (by Aman)

### 🐳 Step 1: Start Kafka & Zookeeper
```bash
docker-compose up -d
```

### 🖥️ Step 2: Start Backend (Terminal 1)
```bash
uvicorn producer.producer_fastapi:app --reload
```


### 🖥️ Step 3: Start Consumer (Terminal 2)
```bash
uvicorn consumer.consumer_fastapi:app --reload --port 8001
```

> (Optional) You can test using:
```bash
curl -X POST "http://127.0.0.1:8000/send_stations/?latitude=40.7306&longitude=-73.9352"
```

### 💻 Step 4: Start Frontend (Terminal 3)
```bash
npm run dev
```

Visit: [http://localhost:3000/charging](http://localhost:3000/charging)
