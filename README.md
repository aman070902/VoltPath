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


## 📄 Database Setup (PostgreSQL)

This section explains how to set up the PostgreSQL database for the FastAPI backend.

---

### ✅ 1. Install PostgreSQL (macOS)

Install PostgreSQL via [Homebrew](https://brew.sh):

```bash
brew install postgresql
brew services start postgresql
```

Check if it’s running:

```bash
brew services list
```

---

### ✅ 2. Create Database and User

Open the PostgreSQL shell:

```bash
psql postgres
```

Then run the following SQL commands:

```sql
CREATE DATABASE voltpath;
CREATE USER amanverma WITH PASSWORD 'Admin@802301';
GRANT ALL PRIVILEGES ON DATABASE voltpath TO amanverma;
```

Exit:

```bash
\q
```

---

### 🔗 3. Create `.env` File in `backend/`

In the `backend` directory, create a `.env` file:

```bash
touch .env
```

Add the following line to the file:

```env
DATABASE_URL=xxxxxxxxxxxxxxxxx
```

> `%40` is the URL-encoded version of `@` in the password.

---

### 🚀 4. Run the FastAPI App

Start the backend server:

```bash
cd backend
source venv/bin/activate
python3 main.py
```

The FastAPI server will run on:

```
http://0.0.0.0:8000
```
