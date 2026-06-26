# Restaurant Management System V2

## Overview

This is a comprehensive Restaurant Management System featuring a modern full-stack architecture. The system is designed to handle various aspects of restaurant operations efficiently.

### Tech Stack

- **Backend:** [NestJS](https://nestjs.com/) (Node.js framework)
- **Frontend:** [Next.js](https://nextjs.org/) (React framework)
- **Database:** PostgreSQL
- **Caching/Queue:** Redis
- **Containerization:** Docker & Docker Compose

## Prerequisites

Before running the project, ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop) & Docker Compose
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

## Getting Started

Follow these steps to set up and run the application.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Restaurant_SystemV2
```

### 2. Infrastructure Setup (Database & Redis)

Start the required services using Docker Compose. This works for both development and production setups to ensure dependencies are available.

```bash
docker-compose up -d
```
This command starts:
- **Postgres** on port `5432`
- **Redis** on port `6379`

### 3. Backend Setup

Navigate to the backend directory and install dependencies.

```bash
cd restaurant_system/backend
npm install
```

Configure your environment variables:
Create a `.env` file in `restaurant_system/backend` if it doesn't exist (copy from example if available, or ensure it matches `docker-compose.yml` credentials).

**Run the Backend:**

```bash
# Development mode
npm run start:dev
```

The backend server will likely start on `http://localhost:3000` (check console output).

### 4. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies.

```bash
cd restaurant_system/frontend
npm install
```

**Run the Frontend:**

```bash
# Development mode
npm run dev
```

The frontend application will run on `http://localhost:3001` (or 3000 if backend is on a different port).

## Project Structure

```
Restaurant_SystemV2/
├── docker-compose.yml       # Docker definition for DB and Redis
├── restaurant_system/
│   ├── backend/             # NestJS Application
│   └── frontend/            # Next.js Application
└── README.md                # This file
```

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.
