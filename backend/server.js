const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Configure Socket.IO with CORS
const io = socketIo(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Middleware
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    credentials: true
}));
app.use(express.json());

// Serve the audio test page
app.get('/test-audio', (req, res) => {
    const testFilePath = path.join(__dirname, '..', 'audio-test.html');
    
    if (fs.existsSync(testFilePath)) {
        res.sendFile(testFilePath);
    } else {
        res.status(404).send('Test file not found');
    }
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Voice AI Server is running!',
        timestamp: new Date().toISOString()
    });
});

// Voice agents with exact API IDs provided by user
const VOICE_AGENTS = {
    'vrlYThSLKW8zkmzKp6HB': { 
        name: 'Lili', 
        personality: 'friendly and energetic',
        color: 'from-pink-400 to-rose-500'
    },
    'cjVigY5qzO86Huf0OWal': { 
        name: 'Eric', 
        personality: 'professional and calm',
        color: 'from-blue-400 to-indigo-500'
    },
    'hnrrfdVZhpEHlvvBppOW': { 
        name: 'Kalina', 
        personality: 'helpful and intelligent',
        color: 'from-purple-400 to-violet-500'
    },
    'YKAmPotHIjfmLzh5daE4': { 
        name: 'Andreea', 
        personality: 'warm and supportive',
        color: 'from-green-400 to-emerald-500'
    },
    'kdmDKE6EkgrWrrykO9Qt': { 
        name: 'Alexandra', 
        personality: 'creative and enthusiastic',
        color: 'from-yellow-400 to-orange-500'
    },
    'GRHbHyXbUO8nF4YexVTa': { 
        name: 'Anca', 
        personality: 'analytical and thoughtful',
        color: 'from-teal-400 to-cyan-500'
    },
    'sGcPNcpR5PikknzyXcy7': { 
        name: 'Cristi', 
        personality: 'confident and dynamic',
        color: 'from-red-400 to-pink-500'
    }
};

// Active conversations storage
const activeConversations = new Map();

// Start conversation endpoint  
app.post('/api/start-conversation', async (req, res) => {
    try {
        const { voiceId } = req.body;
        
        if (!voiceId || !VOICE_AGENTS[voiceId]) {
            return res.status(400).json({ 
                error: 'Invalid voice ID provided',
                availableVoices: Object.keys(VOICE_AGENTS)
            });
        }

        const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const agent = VOICE_AGENTS[voiceId];
        
        // Store conversation details
        activeConversations.set(conversationId, {
            voiceId,
            agentName: agent.name,
            personality: agent.personality,
            startTime: new Date(),
            messageHistory: []
        });

        // Check if we have real API keys
        const isDemoMode = !process.env.ELEVENLABS_API_KEY || 
                          process.env.ELEVENLABS_API_KEY.includes('test-key') ||
                          !process.env.OPENAI_API_KEY || 
                          process.env.OPENAI_API_KEY.includes('test-key');

        console.log(`🎙️ Starting conversation ${conversationId} with ${agent.name} (${voiceId})`);

        res.json({
            conversation_id: conversationId,
            voice_id: voiceId,
            agent_name: agent.name,
            demo_mode: isDemoMode,
            message: `Conversation started with ${agent.name}!`
        });

    } catch (error) {
        console.error('❌ Error starting conversation:', error);
        res.status(500).json({ 
            error: 'Failed to start conversation',
            details: error.message 
        });
    }
});

// Text to Speech endpoint
app.post('/api/text-to-speech', async (req, res) => {
    try {
        const { text, voiceId } = req.body;
        
        if (!voiceId || !VOICE_AGENTS[voiceId]) {
            return res.status(400).json({ error: 'Invalid voice ID' });
        }

        // Demo mode - return empty audio response
        if (!process.env.ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY.includes('test-key')) {
            console.log(`🎵 Demo TTS: "${text}" with ${VOICE_AGENTS[voiceId].name}`);
            
            // Return a small silence audio file
            const silenceAudio = Buffer.from('UklGRigAAABXQVZFZm10IAAAAAAAAAACAAEAgD4AAAB9AQACABAAbGlzdBoAAABJTkZPSUNSRAwAAAAyMDA5LTEyLTE2AGRhdGEEAAAAAAEA', 'base64');
            
            res.set({
                'Content-Type': 'audio/mpeg',
                'Content-Length': silenceAudio.byteLength
            });
            res.send(silenceAudio);
            return;
        }

        // Real ElevenLabs API call using the exact voice ID provided
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': process.env.ELEVENLABS_API_KEY
            },
            body: JSON.stringify({
                text: text,
                model_id: 'eleven_turbo_v2_5',
                voice_settings: {
                    stability: 0.6,
                    similarity_boost: 0.8,
                    style: 0.3,
                    use_speaker_boost: true
                }
            })
        });

        if (!response.ok) {
            throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText}`);
        }

        const audioBuffer = await response.arrayBuffer();
        console.log(`🎵 Generated ${audioBuffer.byteLength} bytes of audio for ${VOICE_AGENTS[voiceId].name}`);
        
        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.byteLength
        });
        res.send(Buffer.from(audioBuffer));
        
    } catch (error) {
        console.error('❌ Text-to-speech error:', error);
        res.status(500).json({ error: 'Failed to generate speech' });
    }
});

// Get available voices
app.get('/api/voices', (req, res) => {
    const voices = Object.entries(VOICE_AGENTS).map(([id, agent]) => ({
        id,
        name: agent.name,
        personality: agent.personality,
        color: agent.color
    }));
    
    res.json({ voices });
});

// OpenAI Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationId, voiceId } = req.body;
        
        const conversation = activeConversations.get(conversationId);
        const agent = VOICE_AGENTS[voiceId] || VOICE_AGENTS['hnrrfdVZhpEHlvvBppOW']; // Default to Kalina

        // Demo mode - simulate AI response without API calls
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('test-key')) {
            console.log(`🤖 Demo AI (${agent.name}): "${message}"`);
            
            const demoResponses = [
                `Salut! Sunt ${agent.name}. Cu ce te pot ajuta astăzi?`,
                `Înțeleg perfect ce îmi spui. Sunt ${agent.name} și pot să te ajut cu informații sau să răspund la întrebările tale.`,
                `Mulțumesc pentru mesaj! Sunt ${agent.name} și sunt aici să te ajut cu orice ai nevoie.`,
                `Excelent! Eu sunt ${agent.name} și pot să discut cu tine pe orice subiect care te interesează.`,
                `Perfect! Sistemul nostru de voice AI funcționează impecabil. Sunt ${agent.name}. Ce alte întrebări ai?`,
                `Îți mulțumesc că testezi demo-ul! Sunt ${agent.name} și mă bucur să vorbesc cu tine.`,
                `Funcționez perfect! Sunt ${agent.name}, asistentul tău AI vocal. Cum te pot ajuta mai departe?`
            ];
            
            const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
            
            // Add to conversation history
            if (conversation) {
                conversation.messageHistory.push(
                    { role: 'user', content: message, timestamp: new Date() },
                    { role: 'assistant', content: randomResponse, timestamp: new Date() }
                );
            }

            setTimeout(() => {
                res.json({ 
                    response: randomResponse,
                    demo: true,
                    agent: agent.name
                });
            }, 500); // Simulate network delay
            
            return;
        }
        
        // Real OpenAI API call
        const systemPrompt = `You are ${agent.name}, a ${agent.personality} AI voice assistant. 
        Keep responses conversational, natural, and under 100 words. 
        Always respond in Romanian since the user is speaking in Romanian.
        Be helpful and engaging while maintaining your ${agent.personality} personality.`;

        const messages = [
            { role: 'system', content: systemPrompt },
        ];

        // Add conversation history if available
        if (conversation && conversation.messageHistory.length > 0) {
            messages.push(...conversation.messageHistory.slice(-6)); // Last 6 messages for context
        }

        messages.push({ role: 'user', content: message });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: messages,
                max_tokens: 150,
                temperature: 0.7,
                presence_penalty: 0.3,
                frequency_penalty: 0.3
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // Add to conversation history
        if (conversation) {
            conversation.messageHistory.push(
                { role: 'user', content: message, timestamp: new Date() },
                { role: 'assistant', content: aiResponse, timestamp: new Date() }
            );
        }

        console.log(`🤖 AI (${agent.name}) responded: "${aiResponse}"`);

        res.json({ 
            response: aiResponse,
            agent: agent.name
        });
        
    } catch (error) {
        console.error('❌ Chat error:', error);
        res.status(500).json({ error: 'Failed to get AI response' });
    }
});

// Socket.IO connection handling for real-time conversation
io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id);
    
    let currentConversation = null;
    let currentVoiceId = null;

    // Join a conversation
    socket.on('join-conversation', (data) => {
        const { conversationId, voiceId } = data;
        currentConversation = conversationId;
        currentVoiceId = voiceId;
        
        const conversation = activeConversations.get(conversationId);
        const agent = VOICE_AGENTS[voiceId];
        
        if (conversation && agent) {
            socket.join(conversationId);
            console.log(`🎭 ${socket.id} joined conversation ${conversationId} with ${agent.name}`);
            
            socket.emit('conversation-ready', {
                status: 'ready',
                agent: agent.name,
                conversationId,
                demo_mode: !process.env.ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY.includes('test-key')
            });
        } else {
            socket.emit('conversation-error', { error: 'Invalid conversation or voice ID' });
        }
    });

    // Handle incoming audio from user
    socket.on('send-audio', async (data) => {
        try {
            const { audioData } = data;
            console.log(`🎤 Received audio from ${socket.id}, size: ${audioData.length} chars`);
            
            if (!currentConversation || !currentVoiceId) {
                socket.emit('conversation-error', { error: 'No active conversation' });
                return;
            }

            const agent = VOICE_AGENTS[currentVoiceId];
            
            // Step 1: Simulate or process speech-to-text
            const demoTexts = [
                "Salut, cum ești?",
                "Ce mai faci?",
                "Poți să îmi răspunzi?",
                "Testez sistemul vocal",
                "Funcționează demo-ul?",
                "Mulțumesc pentru test",
                "Îmi place vocea ta",
                "Ce știi să faci?",
                "Ajută-mă cu ceva"
            ];
            
            const transcript = demoTexts[Math.floor(Math.random() * demoTexts.length)];
            console.log(`📝 Simulated transcript: "${transcript}"`);

            // Step 2: Get AI response
            let aiResponse;
            try {
                const chatResponse = await fetch(`http://localhost:${process.env.PORT || 8081}/api/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        message: transcript,
                        conversationId: currentConversation,
                        voiceId: currentVoiceId
                    })
                });
                
                const chatData = await chatResponse.json();
                aiResponse = chatData.response;
                
                console.log(`🤖 ${agent.name} responds: "${aiResponse}"`);
            } catch (error) {
                console.error('❌ Chat Error:', error);
                aiResponse = `Îmi pare rău, am întâmpinat o problemă. Sunt ${agent.name} și încerc să răspund cât mai bine.`;
            }

            // Step 3: Generate audio for AI response
            try {
                const ttsResponse = await fetch(`http://localhost:${process.env.PORT || 8081}/api/text-to-speech`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        text: aiResponse,
                        voiceId: currentVoiceId
                    })
                });
                
                if (ttsResponse.ok) {
                    const audioBuffer = await ttsResponse.arrayBuffer();
                    const audioBase64 = Buffer.from(audioBuffer).toString('base64');
                    
                    console.log(`🎵 Generated ${audioBuffer.byteLength} bytes of audio for ${agent.name}`);
                    
                    // Send complete response with audio to client
                    socket.emit('ai-message', {
                        type: 'audio',
                        transcript: transcript,
                        message: aiResponse,
                        audio_data: audioBase64,
                        agent: agent.name,
                        demo: process.env.ELEVENLABS_API_KEY?.includes('test-key') || false
                    });
                } else {
                    console.log('❌ TTS failed, sending text only');
                    // Send text-only response if TTS fails
                    socket.emit('ai-message', {
                        type: 'text',
                        transcript: transcript,
                        message: aiResponse,
                        agent: agent.name,
                        demo: true
                    });
                }
                
            } catch (error) {
                console.error('❌ TTS Error:', error);
                
                // Send text-only response
                socket.emit('ai-message', {
                    type: 'text',
                    transcript: transcript,
                    message: aiResponse,
                    agent: agent.name,
                    demo: true
                });
            }
            
        } catch (error) {
            console.error('❌ Audio processing error:', error);
            socket.emit('conversation-error', { 
                error: 'Failed to process audio',
                details: error.message 
            });
        }
    });

    // End conversation
    socket.on('end-conversation', () => {
        if (currentConversation) {
            console.log(`🔚 Ending conversation ${currentConversation} for ${socket.id}`);
            
            socket.leave(currentConversation);
            socket.emit('conversation-ended', { 
                conversationId: currentConversation 
            });
            
            currentConversation = null;
            currentVoiceId = null;
        }
    });

    socket.on('disconnect', () => {
        console.log('🔌 Client disconnected:', socket.id);
        if (currentConversation) {
            socket.leave(currentConversation);
        }
    });
});

// Clean up old conversations (every 30 minutes)
setInterval(() => {
    const now = new Date();
    const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
    
    for (const [id, conversation] of activeConversations.entries()) {
        if (conversation.startTime < thirtyMinutesAgo) {
            activeConversations.delete(id);
            console.log(`🧹 Cleaned up old conversation: ${id}`);
        }
    }
}, 30 * 60 * 1000);

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`🚀 Kalina AI Voice Server running on http://localhost:${PORT}`);
    console.log(`📊 Available voice agents: ${Object.keys(VOICE_AGENTS).length}`);
    console.log('📋 Available endpoints:');
    console.log('  GET  /health - Server health check');
    console.log('  GET  /api/voices - Get available voice agents');
    console.log('  POST /api/start-conversation - Start new conversation');
    console.log('  POST /api/text-to-speech - Convert text to speech');
    console.log('  POST /api/chat - Chat with AI agent');
    console.log('🔌 Socket.IO enabled for real-time conversation');
    
    const isDemoMode = !process.env.ELEVENLABS_API_KEY || 
                      process.env.ELEVENLABS_API_KEY.includes('test-key') ||
                      !process.env.OPENAI_API_KEY || 
                      process.env.OPENAI_API_KEY.includes('test-key');
    
    console.log(`🎭 Mode: ${isDemoMode ? 'DEMO (test keys)' : 'PRODUCTION (real APIs)'}`);
    console.log('💡 Add real API keys to .env file for full functionality');
    
    // List available agents
    Object.entries(VOICE_AGENTS).forEach(([id, agent]) => {
        console.log(`  🎭 ${agent.name} (${id}) - ${agent.personality}`);
    });
});
