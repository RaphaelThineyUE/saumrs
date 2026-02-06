#!/bin/bash

# Development scripts for SAUMRS Application

if [ "$1" == "dev" ]; then
  echo "Starting SAUMRS application in development mode..."
  docker-compose up
elif [ "$1" == "build" ]; then
  echo "Building SAUMRS application..."
  docker-compose build
elif [ "$1" == "down" ]; then
  echo "Stopping SAUMRS application..."
  docker-compose down
elif [ "$1" == "logs" ]; then
  echo "Showing logs..."
  docker-compose logs -f
elif [ "$1" == "backend-dev" ]; then
  echo "Starting backend in development mode..."
  cd backend && npm run dev
elif [ "$1" == "frontend-dev" ]; then
  echo "Starting frontend in development mode..."
  cd frontend && npm run dev
elif [ "$1" == "help" ]; then
  echo "SAUMRS Development Scripts"
  echo ""
  echo "Available commands:"
  echo "  npm run dev              - Start all services with Docker Compose"
  echo "  npm run build            - Build Docker images"
  echo "  npm run down             - Stop all services"
  echo "  npm run logs             - View Docker logs"
  echo "  npm run backend-dev      - Start backend only (local)"
  echo "  npm run frontend-dev     - Start frontend only (local)"
  echo ""
else
  echo "Unknown command. Run 'npm run help' for available commands."
fi
