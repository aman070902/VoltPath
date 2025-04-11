from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import models
from database import engine
from routes import router

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="VoltPath API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Include the router
app.include_router(router, prefix="/api")

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to VoltPath API"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
