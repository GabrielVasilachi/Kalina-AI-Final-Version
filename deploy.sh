#!/bin/bash

# Deployment script for Kalina AI
set -e

echo "🚀 Starting deployment..."

# Environment (default to production)
ENV=${1:-production}
echo "📍 Environment: $ENV"

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   echo "❌ This script should not be run as root for security reasons"
   exit 1
fi

# Pull latest changes
echo "� Pulling latest changes..."
git pull origin main

# Copy environment file
if [ -f ".env.$ENV" ]; then
    echo "📄 Using environment file: .env.$ENV"
    cp ".env.$ENV" .env
elif [ -f ".env.production" ]; then
    echo "� Using production environment file"
    cp ".env.production" .env
else
    echo "⚠️  No environment file found, using defaults"
fi

# Install dependencies
echo "� Installing dependencies..."
npm ci --only=production

# Build application
echo "🔨 Building application..."
npm run build

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Remove old containers and images
echo "🧹 Cleaning up old containers..."
docker-compose rm -f

# Build and start containers
echo "🐳 Building and starting Docker containers..."
docker-compose up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 30

# Health check
echo "🏥 Performing health check..."
MAX_RETRIES=5
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Health check passed!"
        break
    else
        echo "⏳ Health check failed, retrying... ($((RETRY_COUNT + 1))/$MAX_RETRIES)"
        sleep 10
        RETRY_COUNT=$((RETRY_COUNT + 1))
    fi
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "❌ Health check failed after $MAX_RETRIES attempts!"
    echo "📋 Container logs:"
    docker-compose logs --tail=50
    exit 1
fi

# Show container status
echo "📊 Container status:"
docker-compose ps

# Clean up old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

echo "🎉 Deployment completed successfully!"
echo "🌐 Application is running and accessible"

# SSL certificate check (if in production)
if [ "$ENV" = "production" ]; then
    echo "🔒 Checking SSL certificate..."
    if command -v certbot &> /dev/null; then
        sudo certbot certificates
    else
        echo "⚠️  Certbot not found. Manual SSL check recommended."
    fi
fi
