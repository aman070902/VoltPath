# Use a Python base image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY consumer/requirements.txt /app/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the consumer script and environment file into the container
COPY consumer/kafka_consumer_test.py /app/kafka_consumer_test.py

# Set the default command to run the consumer
CMD ["python3", "kafka_consumer_test.py"]
