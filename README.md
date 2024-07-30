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

## Additional setup notes
I wanted to get this up and running on a raspberry pi so I did. Issues I ran into were the following:
- I had to install docker and docker-compose through the command line. This was a PITA. The raspberry PI 5 is arm64 fyi, or at least mine is.
  - Next I needed to run the following commands to get docker working properly.
  - `sudo systemctl status docker` to make sure docker was running.
    - `sudo systemctl start docker` if not.
  - `sudo usermod -aG docker $USER` To add your user to the docker group which was required when I saw a permission denied message.
    - `newgrp docker` to apply these changes immediately.
- And of course I had to restart docker a few times for the containers to stop exiting.

## Known issues

- Sometimes python BE doesn't start the first time. Seems to always start the second time so just "turn it off and on again"
- The style between pages does not match at all. (Gold star if you can guess why)

## Contributing

You are welcome (empowered, even) to make recommendations on improving this project. PRs recommending I improve the readme using the Oxford comma will be ignored.

Branches/PRs should be named in the following way

- Features
  - Branch
    - feature/brand-new-feature
  - Pull Request
    - Feature: Brand new feature
- Bugfixes
  - Branch
    - bugfix/remove-major-bug
  - Pull Request
    - Bugfix: Remove major bug
