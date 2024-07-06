# react-python-postgres

React Frontend styled with TailwindCSS; Python Backend using FastAPI; Postgres Database

## Setup

### Prerequisites

- Docker
- Docker Compose
- npm

### Running the Application

1. Clone the repository:

```sh
git clone https://github.com/cbauserman683/react-python-postgres.git
cd react-python-postgres
```

2. Use the start script:

```sh
./start.sh
```

Short-cut to start just the react frontend:

```sh
./start.sh FE
```

Short-cut to start the entire stack using docker:

```sh
./start.sh ALL
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000

### Stopping the Application

```sh
docker-compose down
```

### Clearing the database

```sh
docker-compose down -v
```

## Known issues

- Sometimes python BE doesn't start the first time. Seems to always start the second time so just "turn it off and on again
