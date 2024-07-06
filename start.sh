#!/bin/bash
# To enable: chmod +x start.sh

# Function to start the frontend
start_frontend() {
  echo "Starting frontend..."
  cd frontend || exit
  
  # Run npm start and check its output
  npm start | tee output.log  # Redirect output to a file
  
  # Check if npm start output contains "react-scripts start"
  if grep -q "react-scripts: command not found" output.log; then
    echo "Detected 'react-scripts start'. Running npm install..."
    npm install
    npm start  # Start again after npm install
  fi
  
  rm output.log  # Clean up output log file
}

# Function to start the entire application using docker-compose
start_docker() {
  echo "Starting the entire application with Docker..."
  docker-compose up --build
}

# Function to display the menu
show_menu() {
  echo "Choose an option:"
  echo "1) Start frontend"
  echo "2) Start entire application with Docker"
  echo "3) Exit"
  read -p "Enter your choice [1-3]: " choice
}

# Main script logic
if [ "$#" -eq 0 ]; then
  # No arguments provided, show menu
  while true; do
    show_menu
    case $choice in
      1) start_frontend; break ;;
      2) start_docker; break ;;
      3) echo "Exiting..."; exit 0 ;;
      *) echo "Invalid option. Please choose again." ;;
    esac
  done
else
  # Handle command-line arguments
  case $1 in
    FE)
      start_frontend
      ;;
    ALL)
      start_docker
      ;;
    *)
      echo "Invalid argument. Use 'FE' to start the frontend or 'ALL' to start the entire application."
      ;;
  esac
fi
