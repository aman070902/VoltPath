# VoltPath - EV Route Navigation

![VoltPath Landing Page](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-05%20at%202.24.42%E2%80%AFAM-u5kFpnwwISjBWdwzFtWv2qQXxFvIXy.png)
VoltPath is a modern web application for EV route navigation, providing AI-powered route planning with real-time charging station data, traffic conditions, and weather updates.






## ML Model Procedure

# Step 1: Data Collection

- **Fetch Data:** Implement Python scripts using the `requests` library to periodically fetch real-time data from APIs for weather conditions, traffic information, and electric vehicle (EV) charging station availability. Each API will require a unique API key, which must be obtained by registering with the respective service providers.
- **APIs to Integrate:** Include services like OpenWeatherMap for weather data, traffic information services, and Open Charge Map for EV charging details.

## Step 2: Data Storage

- **Google Drive Setup:** Use Google Drive for storing the fetched data. This involves mounting Google Drive in Google Colab, which allows direct read/write operations from the notebook.
- **Google Sheets:** Depending on the data structure returned by each API (to be initially inspected), decide whether to use a single Google Sheet with multiple tabs or multiple sheets for organizing the data effectively. This will facilitate easier data management and access, especially for geographic data like latitude and longitude which are crucial for mapping functionalities. 

## Step 3: Data Preprocessing

- **Clean and Prepare Data:** Once data is stored in Google Sheets, preprocess it to ensure quality and consistency. This includes handling missing values, normalizing data, and possibly encoding categorical variables if necessary.
- **Feature Engineering:** Derive new features that could be important for the model predictions, such as time of day from timestamp data, or aggregating traffic data into peak and non-peak hours. Incorporate geographic data transformations if necessary to enhance route predictions.

## Step 4: Model Development and Training

- **Model Selection:** Choose a suitable machine learning model based on the nature of the prediction task. For route optimization, models like decision trees, random forest, or even more complex algorithms like gradient boosting could be appropriate depending on the complexity and amount of data.
- **Training in Colab:** Utilize Google Colab's computational resources to train the model on the preprocessed data. This will involve splitting the data into training and testing sets to validate the model’s performance.

## Step 5: Evaluation and Iteration

- **Real-Time Data Utilization:** Implement mechanisms to continuously update the route recommendations based on incoming real-time data. This involves adjusting the routes in response to changes detected in traffic patterns, weather conditions, or charging station availability.
- **Google Maps Dynamic Rendering:** Ensure that the route updates are dynamically reflected in the Google Maps display, providing users with real-time, navigable routes. Use latitude and longitude data effectively to plot accurate and dynamic routes on the map.


## Quick Start Commands

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/your-username/voltpath.git
cd voltpath

# Install dependencies
npm install

# Run development server
npm run dev