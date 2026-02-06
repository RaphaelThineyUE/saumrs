#!/bin/bash

# Print commands as they execute (for debugging)
set -e

echo "========================================="
echo "Setting up SAUMRS Application"
echo "========================================="

# Install backend dependencies
echo ""
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "========================================="
echo "Setup complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Create a .env file in the backend directory:"
echo "   cp backend/.env.example backend/.env"
echo "2. Update backend/.env with your SendGrid API key"
echo "3. Run: docker-compose up"
echo ""
echo "Or for local development:"
echo "   cd backend && npm run dev"
echo "   cd frontend && npm run dev (in another terminal)"
