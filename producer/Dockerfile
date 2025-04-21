# Base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install Python dependencies
COPY producer/requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt && pip install fastapi uvicorn

# Copy the FastAPI producer script
COPY producer/producer_fastapi.py .

# Expose the port FastAPI runs on
EXPOSE 8000

# Run the FastAPI app using uvicorn
CMD ["uvicorn", "producer_fastapi:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
