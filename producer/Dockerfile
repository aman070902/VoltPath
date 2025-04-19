# Use a Python base image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY producer/requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the producer script and environment file into the container
COPY producer/kafka_producer_test.py /app/kafka_producer_test.py

# Set the default command to run the producer
CMD ["python3", "kafka_producer_test.py"]

