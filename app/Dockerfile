# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file from root
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend code from app folder into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the dev server
CMD ["npm", "run", "dev"]
