#!/bin/bash

echo "🚀 Starting Kalina AI Backend Server..."
echo "📂 Current directory: $(pwd)"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found. Creating default..."
    cat > .env << EOL
# ElevenLabs API Key (replace with your real key)
ELEVENLABS_API_KEY=sk-test-key-here

# OpenAI API Key (replace with your real key)
OPENAI_API_KEY=sk-test-key-here

# Server Port
PORT=8081
EOL
    echo "✅ Created .env file with demo keys"
    echo "💡 Replace the test keys with real API keys for full functionality"
fi

# Start the server
echo "🎙️  Starting server on port 8081..."
node server.js
