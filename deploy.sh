#!/bin/bash
set -e

echo "Starting deployment..."
echo "Pulling latest code..."
git pull origin master

echo "Building and restarting containers..."
docker compose up -d --build --remove-orphans

echo "Cleaning up old images..."
docker image prune -f

echo "✅ Deployment complete!"
echo "Site: https://equiminds.ai"
