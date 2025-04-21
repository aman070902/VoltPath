# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY consumer/requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt && pip install uvicorn fastapi

# Copy consumer code
COPY consumer/consumer_fastapi.py .

# Run FastAPI server
CMD ["uvicorn", "consumer_fastapi:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]
