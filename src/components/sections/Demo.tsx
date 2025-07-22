'use client'

import React from 'react';

type AnimatedPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  opacity?: number;
  duration?: number;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({ d, stroke, strokeWidth, fill, opacity, duration = 800 }) => {
  const pathRef = React.useRef<SVGPathElement | null>(null);
  React.useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    // Force reflow
    void path.getBoundingClientRect();
    path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
    path.style.strokeDashoffset = '0';
  }, [d, duration]);
  return (
    <path
      ref={pathRef}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      opacity={opacity}
      style={{}}
    />
  );
};

import { useScrollReveal } from '@/hooks/useScrollReveal'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { io, Socket } from 'socket.io-client'

// Backend server configuration - Updated to use correct port
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8081'


export function Demo() {
  const [activeTab, setActiveTab] = useState<'conversation' | 'calendar'>('conversation');
  
  // Calendar-specific state
  const [selectedDate, setSelectedDate] = useState(15);
  const [aiMessages, setAiMessages] = useState([
    { from: 'ai', text: 'Bună! Cu ce te pot ajuta astăzi?' },
    { from: 'user', text: 'Aș vrea să reprogramez întâlnirea pentru 22 iulie.' },
    { from: 'ai', text: 'Sigur! Am actualizat calendarul pentru 22 iulie. Mai pot face ceva pentru tine?' }
  ]);

  // Handle calendar date clicks
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setAiMessages([
      ...aiMessages,
      { from: 'user', text: `Aș vrea să reprogramez întâlnirea pentru ${day} iulie.` },
      { from: 'ai', text: `Perfect! Întâlnirea a fost mutată pe ${day} iulie.` }
    ]);
  };
  // Per-company mobile line config: [{startX, startY, endX, endY, curveOffset}]
  // You can edit these values for each company index (0,1,2,3)
  const companyMobileLineConfig = [
    // Example: Restaurant
    { startX: 0.5, startY: 0, endX: 0.5, endY: 0, curveOffset: 40 },
    // Example: Clinică
    { startX: 0.5, startY: 0, endX: 0.5, endY: 0, curveOffset: 60 },
    // Example: Service Auto
    { startX: 0.5, startY: 0, endX: 0.5, endY: 0, curveOffset: 20 },
    // Example: Agenție de Turism
    { startX: 0.5, startY: 0, endX: 0.5, endY: 0, curveOffset: 80 },
  ];
  // Ref pentru butonul selectat și microfon
  const selectedCompanyRef = useRef<HTMLButtonElement>(null)
  const micRef = useRef<HTMLButtonElement>(null)
  type CompanyCurve = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
    curveOffset?: number;
  };
  const [curve, setCurve] = useState<CompanyCurve | null>(null)
  // No company selected by default
  const [selectedCompanyLeft, setSelectedCompanyLeft] = useState<number | null>(null)
  const selectedVoiceRightRef = useRef<HTMLButtonElement>(null)
  const [voiceCurve, setVoiceCurve] = useState<
    | { x1: number; y1: number; x2: number; y2: number; width: number; height: number }
    | null
  >(null)
  const [selectedVoiceRight, setSelectedVoiceRight] = useState<number | null>(null)
  // ...all useState and useRef declarations...
  // ...state declarations...
  // (all useState/useRef declarations go here)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  // Removed isHeaderOverDemo state
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [conversationStatus, setConversationStatus] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedVoice, setSelectedVoice] = useState(0)
  const [selectedVoiceLeft, setSelectedVoiceLeft] = useState(0)
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const { ref, classes, isVisible } = useScrollReveal('up')
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  // Calculează pozițiile pentru curbă la fiecare selectare sau resize
  useLayoutEffect(() => {
    function updateCurve() {
      if (
        selectedCompanyLeft !== null &&
        selectedCompanyRef.current &&
        micRef.current &&
        sectionRef.current
      ) {
        const companyRect = selectedCompanyRef.current.getBoundingClientRect();
        const micRect = micRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
          // Start from the top center of the company button
          const cfg = companyMobileLineConfig[selectedCompanyLeft] || companyMobileLineConfig[0];
          const startX = typeof cfg.startX === 'number' ? cfg.startX : 0.5;
          const startY = typeof cfg.startY === 'number' ? cfg.startY : 0;
          const x1 = companyRect.left + companyRect.width * startX - sectionRect.left;
          const y1 = companyRect.top + companyRect.height * startY - sectionRect.top;
          // End position (relative to mic button, from config)
          const x2 = micRect.left + micRect.width * cfg.endX - sectionRect.left;
          const y2 = micRect.top + micRect.height * cfg.endY - sectionRect.top;
          setCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height,
            curveOffset: cfg.curveOffset
          });
        } else {
          // Desktop: previous logic
          const micInset = 34;
          setCurve({
            x1: companyRect.right - sectionRect.left,
            y1: companyRect.top + companyRect.height * 0 - sectionRect.top,
            x2: micRect.left - sectionRect.left + micInset,
            y2: micRect.top + micRect.height / 2 - sectionRect.top,
            width: sectionRect.width,
            height: sectionRect.height
          });
        }
      } else {
        setCurve(null);
      }
    }
    updateCurve()
    window.addEventListener('resize', updateCurve)
    return () => window.removeEventListener('resize', updateCurve)
  }, [selectedCompanyLeft, isRecording, isConnected])
  const conversationIdRef = useRef<string | null>(null)

    // Voice options with exact ElevenLabs voice IDs provided by user
  const voiceOptions = [
    { id: 'vrlYThSLKW8zkmzKp6HB', name: 'Lili', color: 'from-pink-400 to-rose-500', bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500' },
    { id: 'cjVigY5qzO86Huf0OWal', name: 'Eric', color: 'from-blue-400 to-indigo-500', bgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500' },
    { id: 'hnrrfdVZhpEHlvvBppOW', name: 'Kalina', color: 'from-purple-400 to-violet-500', bgColor: 'bg-gradient-to-br from-purple-400 to-violet-500' },
    { id: 'kdmDKE6EkgrWrrykO9Qt', name: 'Alexandra', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  ] as const
  const Companies = [
    { id: 'vrlYThSLKW8zkmzKp6HB', name: 'Restaurant', color: 'from-pink-400 to-rose-500', bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500' },
    { id: 'cjVigY5qzO86Huf0OWal', name: 'Clinică', color: 'from-blue-400 to-indigo-500', bgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500' },
    { id: 'hnrrfdVZhpEHlvvBppOW', name: 'Service Auto', color: 'from-purple-400 to-violet-500', bgColor: 'bg-gradient-to-br from-purple-400 to-violet-500' },
    { id: 'kdmDKE6EkgrWrrykO9Qt', name: 'Agenție de Turism', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  ] as const

  // Handle voice selection navigation with smooth animations
  const handleVoiceSelect = (direction: 'next' | 'prev') => {
    setSelectedVoice((prev) => {
      if (direction === 'next') {
        return prev >= voiceOptions.length - 1 ? 0 : prev + 1
      } else {
        return prev <= 0 ? voiceOptions.length - 1 : prev - 1
      }
    })
  }

  // Reset function to clear all states
  const resetDemoState = () => {
    setIsConnecting(false)
    setIsConnected(false)
    setIsRecording(false)
    setError('')
    setConversationStatus('')
    setAudioLevel(0)
    setIsAudioPlaying(false)
    setIsDemoMode(false)
    conversationIdRef.current = null
    
    // Clear any timeouts
    if (loadingTimeout) {
      clearTimeout(loadingTimeout)
      setLoadingTimeout(null)
    }
    
    // Close Socket.IO connection
    if (socket) {
      socket.disconnect()
      setSocket(null)
    }
    
    // Stop all media
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    if (audioContextRef.current) {
      audioContextRef.current.close()
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Only detect scroll direction, no header overlap logic
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentY;
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Cleanup effect to prevent stuck loading states
  useEffect(() => {
    if (isConnecting) {
      // Set a maximum loading timeout
      const timeout = setTimeout(() => {
        if (isConnecting) {
          console.warn('Loading timeout reached, resetting state')
          setIsConnecting(false)
          setError('Timeout - Aplicația nu răspunde. Încearcă din nou.')
          setConversationStatus('')
        }
      }, 15000) // 15 second maximum loading time
      
      setLoadingTimeout(timeout)
      
      return () => {
        if (timeout) {
          clearTimeout(timeout)
        }
      }
    } else {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout)
        setLoadingTimeout(null)
      }
    }
  }, [isConnecting, loadingTimeout])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout)
      }
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [loadingTimeout])

  // Removed header overlap effect

  // Backend API functions
  const startConversationWithBackend = async () => {
    try {
      setIsConnecting(true)
      setError('')
      setConversationStatus('Conectare la Kalina AI...')

      const selectedVoiceId = voiceOptions[selectedVoice].id
      console.log(`Starting conversation with voice: ${voiceOptions[selectedVoice].name} (${selectedVoiceId})`)

      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Connection timeout')), 15000) // 15 second timeout
      })

      // Start conversation with our backend
      const fetchPromise = fetch(`${BACKEND_URL}/api/start-conversation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voiceId: selectedVoiceId
        }),
      })

      const response = await Promise.race([fetchPromise, timeoutPromise])

      if (!(response instanceof Response)) {
        throw new Error('Invalid response')
      }

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Backend API Error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const data = await response.json()
      conversationIdRef.current = data.conversation_id
      setIsConnected(true)
      setIsDemoMode(data.demo_mode || false)
      setConversationStatus(`Conectat cu ${voiceOptions[selectedVoice].name}! ${data.demo_mode ? '(Mod Demo)' : ''} Vorbește acum...`)
      
      // Connect to Socket.IO for real-time communication
      await connectToBackendSocket(data.conversation_id, selectedVoiceId)
      
      console.log('Backend conversation started:', data)
      return data
    } catch (error: any) {
      console.error('Backend connection error:', error)
      
      // Handle different types of errors gracefully
      if (error.message.includes('timeout') || error.message.includes('fetch')) {
        setError(`Eroare la conectarea cu serverul. Încearcă din nou.`)
        setConversationStatus('')
        return null
      } else {
        setError('Eroare la conectarea cu Kalina. Încearcă din nou.')
        setConversationStatus('')
        return null
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const stopConversation = async () => {
    if (conversationIdRef.current) {
      try {
        setConversationStatus('Închidere conversație...')
        
        // Disconnect Socket.IO
        if (socket) {
          socket.emit('end-conversation')
          socket.disconnect()
          setSocket(null)
        }
        
        conversationIdRef.current = null
        setIsConnected(false)
        setConversationStatus('')
        setIsAudioPlaying(false)
        setIsDemoMode(false)
        console.log('Kalina AI conversation ended')
      } catch (error) {
        console.error('Error ending Kalina AI conversation:', error)
      }
    }
  }

  // Socket.IO connection for real-time conversation
  const connectToBackendSocket = async (conversationId: string, voiceId: string) => {
    try {
      const newSocket = io(BACKEND_URL)
      
      newSocket.on('connect', () => {
        console.log('Connected to backend socket')
        newSocket.emit('join-conversation', { conversationId, voiceId })
      })

      newSocket.on('conversation-ready', (data) => {
        console.log('Conversation ready:', data)
        setConversationStatus(`Conversație activă cu ${voiceOptions[selectedVoice].name}! ${data.demo_mode ? '(Mod Demo)' : ''}`)
        setIsDemoMode(data.demo_mode || false)
      })

      newSocket.on('ai-message', (data) => {
        console.log('🎵 AI message received:', data.type, 'Demo:', data.demo)
        
        if (data.type === 'audio' && data.audio_data) {
          // Handle audio response - always try to play if audio data is provided
          console.log('🔊 Playing audio response from', data.agent)
          handleAIAudioResponse(data.audio_data)
        } else if (data.type === 'text' || data.demo) {
          // Handle text response or demo mode
          console.log('📝 AI text response:', data.message)
          setIsAudioPlaying(true)
          setTimeout(() => setIsAudioPlaying(false), 2000) // Simulate audio playback
        }
        
        // Always log the transcript and response for debugging
        if (data.transcript) {
          console.log('👂 You said:', data.transcript)
        }
        if (data.message) {
          console.log('🤖 AI replied:', data.message)
        }
      })

      newSocket.on('conversation-ended', () => {
        console.log('Conversation ended by server')
        setSocket(null)
        setIsConnected(false)
      })

      newSocket.on('conversation-error', (data) => {
        console.error('Conversation error:', data.error)
        setError('Eroare în conversație. Încearcă din nou.')
      })

      newSocket.on('disconnect', () => {
        console.log('Disconnected from backend socket')
        setSocket(null)
      })

      setSocket(newSocket)
      return newSocket
    } catch (error) {
      console.error('Error connecting to backend socket:', error)
      return null
    }
  }

  // Handle AI audio response
  const handleAIAudioResponse = async (audioData: string) => {
    try {
      console.log('🎵 Processing audio response, length:', audioData.length)
      
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      // Resume audio context if suspended (required by some browsers)
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume()
        console.log('🔊 Audio context resumed')
      }

      const binaryString = atob(audioData)
      const audioArray = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        audioArray[i] = binaryString.charCodeAt(i)
      }

      console.log('🎵 Decoding audio buffer, size:', audioArray.byteLength, 'bytes')
      const audioBuffer = await audioContextRef.current.decodeAudioData(audioArray.buffer)
      console.log('✅ Audio decoded successfully, duration:', audioBuffer.duration, 'seconds')
      
      playAudioBuffer(audioBuffer)
      
    } catch (error) {
      console.error('❌ Error handling AI audio response:', error)
      // Fallback: show that we're "playing" audio even if it failed
      setIsAudioPlaying(true)
      setTimeout(() => setIsAudioPlaying(false), 2000)
    }
  }

  // Play audio buffer
  const playAudioBuffer = (audioBuffer: AudioBuffer) => {
    if (!audioContextRef.current) {
      console.error('❌ No audio context available')
      return
    }
    
    console.log('🔊 Playing audio buffer, duration:', audioBuffer.duration, 'seconds')
    
    const source = audioContextRef.current.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioContextRef.current.destination)
    
    setIsAudioPlaying(true)
    
    source.onended = () => {
      console.log('✅ Audio playback finished')
      setIsAudioPlaying(false)
    }
    
    try {
      source.start()
      console.log('🎵 Audio playback started')
    } catch (error) {
      console.error('❌ Failed to start audio:', error)
      setIsAudioPlaying(false)
    }
  }

  // Send audio to backend
  const sendAudioToBackend = (audioBlob: Blob) => {
    console.log('🎤 Sending audio to backend, size:', audioBlob.size, 'socket connected:', socket?.connected)
    
    if (socket && socket.connected) {
      console.log('📡 Socket is connected, processing audio...')
      const reader = new FileReader()
      reader.onload = () => {
        const audioData = new Uint8Array(reader.result as ArrayBuffer)
        // Convert Uint8Array to base64 string
        let binary = ''
        for (let i = 0; i < audioData.byteLength; i++) {
          binary += String.fromCharCode(audioData[i])
        }
        const base64Audio = btoa(binary)
        
        console.log('🚀 Emitting send-audio event with data length:', base64Audio.length)
        socket.emit('send-audio', {
          audioData: base64Audio
        })
      }
      reader.readAsArrayBuffer(audioBlob)
    } else {
      console.log('❌ Socket not connected or not available')
    }
  }

  // Audio level monitoring function
  const monitorAudioLevel = () => {
    if (analyserRef.current) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
      analyserRef.current.getByteFrequencyData(dataArray)
      
      // Calculate average volume with higher sensitivity
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length
      // Amplify the sensitivity and apply exponential scaling for more dramatic effect
      const amplified = (average / 64) * 2 // Increased from 128 to 64, doubled multiplier
      const exponential = Math.pow(amplified, 0.7) // Exponential curve for more dramatic response
      const normalizedLevel = Math.min(exponential * 1.5, 2) // Allow values up to 2 for stronger effect
      setAudioLevel(normalizedLevel)
      
      if (isRecording) {
        animationFrameRef.current = requestAnimationFrame(monitorAudioLevel)
      }
    }
  }

  // Handle microphone recording and ElevenLabs integration
  const handleDemoClick = async () => {
    if (!isRecording && !isConnected) {
      try {
        // First, start conversation with backend
        const conversationData = await startConversationWithBackend()
        if (!conversationData) {
          return // Error already handled in startConversationWithBackend
        }

        // Add timeout for microphone access
        const micTimeout = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Microphone access timeout')), 5000) // 5 second timeout
        })

        const micPromise = navigator.mediaDevices.getUserMedia({ audio: true })
        
        setConversationStatus('Solicitare acces microfon...')
        const stream = await Promise.race([micPromise, micTimeout])
        
        if (!(stream instanceof MediaStream)) {
          throw new Error('Invalid stream')
        }
        
        streamRef.current = stream
        
        // Set up audio analysis and real-time streaming
        if (typeof window !== 'undefined') {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
          analyserRef.current = audioContextRef.current.createAnalyser()
          const source = audioContextRef.current.createMediaStreamSource(stream)
          source.connect(analyserRef.current)
          analyserRef.current.fftSize = 512 // Increased from 256 for better frequency resolution
          analyserRef.current.smoothingTimeConstant = 0.3 // Reduced from default 0.8 for faster response
        }
        
        // Set up MediaRecorder for real-time streaming to AI
        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: 'audio/webm;codecs=opus',
          audioBitsPerSecond: 16000
        })
        
        // Send audio chunks to AI in real-time
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0 && socket) {
            sendAudioToBackend(event.data)
          }
        }
        
        // Start recording with frequent data events (every 100ms)
        mediaRecorderRef.current.start(100)
        setIsRecording(true)
        setConversationStatus(`Conversație în curs cu ${voiceOptions[selectedVoice].name}...`)
        
        // Start monitoring audio levels
        monitorAudioLevel()

        console.log('Recording started with Kalina AI integration')
      } catch (err: any) {
        console.error('Demo start error:', err)
        
        // Reset states on error
        setIsConnecting(false)
        setIsConnected(false)
        setIsRecording(false)
        conversationIdRef.current = null
        
        if (err.message.includes('timeout')) {
          setError('Timeout - Aplicația nu răspunde. Încearcă din nou.')
        } else if (err.message.includes('microphone') || err.message.includes('getUserMedia')) {
          setError('Eroare la accesarea microfonului. Verifică permisiunile.')
        } else {
          setError('Eroare la conectarea cu Kalina AI. Încearcă din nou.')
        }
        setConversationStatus('')
      }
    } else {
      // Stop everything
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      // Stop conversation and Socket.IO
      await stopConversation()
      
      setIsRecording(false)
      setAudioLevel(0)
      setError('')
      setIsAudioPlaying(false)
      console.log('Recording and Kalina AI conversation stopped')
    }
  }

  // Calculate voice curve for selected voice option
  useLayoutEffect(() => {
    function updateVoiceCurve() {
      if (
        selectedVoiceRight !== null &&
        selectedVoiceRightRef.current &&
        micRef.current &&
        sectionRef.current
      ) {
        const voiceRect = selectedVoiceRightRef.current.getBoundingClientRect();
        const micRect = micRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 640;
        const micInset = 34; // px, match company curve
        if (isMobile) {
          // Start from center top of the voice button
          const x1 = voiceRect.left + voiceRect.width / 2 - sectionRect.left;
          const y1 = voiceRect.top - sectionRect.top;
          // End at mic center (same as before)
          const x2 = micRect.right - sectionRect.left - micInset;
          const y2 = micRect.top + micRect.height / 2 - sectionRect.top;
          setVoiceCurve({
            x1,
            y1,
            x2,
            y2,
            width: sectionRect.width,
            height: sectionRect.height
          });
        } else {
          setVoiceCurve({
            x1: voiceRect.left - sectionRect.left,
            y1: voiceRect.top + voiceRect.height * 0 - sectionRect.top,
            x2: micRect.right - sectionRect.left - micInset,
            y2: micRect.top + micRect.height / 2 - sectionRect.top,
            width: sectionRect.width,
            height: sectionRect.height
          });
        }
      } else {
        setVoiceCurve(null);
      }
    }
    updateVoiceCurve()
    window.addEventListener('resize', updateVoiceCurve)
    return () => window.removeEventListener('resize', updateVoiceCurve)
  }, [selectedVoiceRight, isRecording, isConnected])

  return (
    <section id="demo" ref={sectionRef} className="bg-white py-6 md:py-8">
      {/* Switcher buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 ${
            activeTab === 'conversation'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-gray-400'
          }`}
          onClick={() => setActiveTab('conversation')}
        >
          Conversation AI
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 ${
            activeTab === 'calendar'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-gray-300 hover:border-gray-400'
          }`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar AI
        </button>
      </div>
      
      {/* Content Container with smooth transitions */}
      <div className="relative overflow-hidden">
        {/* Conversation AI Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            activeTab === 'conversation' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none'
          }`}
        >
          <div ref={ref} style={{ position: 'relative' }}>
        {/* SVG lines moved below content to avoid interfering with text */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
          {curve && selectedCompanyLeft !== null && (
            <svg
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                width: curve.width,
                height: curve.height,
              }}
              width={curve.width}
              height={curve.height}
            >
              {window.innerWidth < 640 ? (
                // Mobile: curve from bottom of company, curve up to mic center
                <AnimatedPath
                  d={`M ${curve.x1} ${curve.y1} C ${curve.x1} ${curve.y1 + ((curve.y2 - curve.y1) / 2)}, ${curve.x2} ${curve.y2 - ((curve.y2 - curve.y1) / 2)}, ${curve.x2} ${curve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              ) : (
                // Desktop: original horizontal curve
                <AnimatedPath
                  d={`M ${curve.x1} ${curve.y1} C ${curve.x1 + (curve.curveOffset ?? 80)} ${curve.y1}, ${curve.x2 - (curve.curveOffset ?? 80)} ${curve.y2}, ${curve.x2} ${curve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              )}
            </svg>
          )}
          {voiceCurve && selectedVoiceRight !== null && (
            <svg
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                pointerEvents: 'none',
                width: voiceCurve.width,
                height: voiceCurve.height,
              }}
              width={voiceCurve.width}
              height={voiceCurve.height}
            >
              {window.innerWidth < 640 ? (
                // Mobile: curve from top of voice option, curve down to mic center
                <AnimatedPath
                  d={`M ${voiceCurve.x1} ${voiceCurve.y1} C ${voiceCurve.x1} ${voiceCurve.y1 + ((voiceCurve.y2 - voiceCurve.y1) / 2)}, ${voiceCurve.x2} ${voiceCurve.y2 - ((voiceCurve.y2 - voiceCurve.y1) / 2)}, ${voiceCurve.x2} ${voiceCurve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              ) : (
                <AnimatedPath
                  d={`M ${voiceCurve.x1} ${voiceCurve.y1} C ${voiceCurve.x1 - 80} ${voiceCurve.y1}, ${voiceCurve.x2 + 80} ${voiceCurve.y2}, ${voiceCurve.x2} ${voiceCurve.y2}`}
                  stroke="black"
                  strokeWidth={3}
                  fill="none"
                  opacity={0.7}
                  duration={800}
                />
              )}
            </svg>
          )}
        </div>
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div
            className="border border-gray-900 rounded-lg overflow-hidden bg-white"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              maxWidth: '1000px',
              minHeight: '400px',
              height: 'auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Header Section */}
            <div className="text-center mb-10 mt-8 sm:mb-16 sm:mt-11 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
                Try Kalina AI
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Experience AI-powered voice conversations with natural, human-like responses
              </p>
            </div>

            {/* Voice Selection */}
            {!isRecording && !isConnected && (
              <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 px-2 sm:px-6 w-full">
                {/* Companies on the left */}
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-start sm:pr-6 w-full sm:w-auto justify-center" style={{zIndex: 10, position: 'relative'}}>
                  {Companies.map((company, idx) => (
                    <button
                      key={company.id}
                      ref={selectedCompanyLeft === idx ? selectedCompanyRef : undefined}
                      onClick={() => setSelectedCompanyLeft(idx)}
                      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-200 font-medium text-xs sm:text-sm md:text-base ${
                        selectedCompanyLeft === idx
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ minWidth: '80px', textAlign: 'center', position: 'relative', zIndex: 10 }}
                    >
                      <span style={{ position: 'relative', zIndex: 10 }}>{company.name}</span>
                    </button>
                  ))}
                </div>
                {/* Centered microphone */}
                <div className="flex flex-col items-center justify-center flex-1 w-full sm:w-auto" style={{zIndex: 10, position: 'relative'}}>
                  <button
                    ref={micRef}
                    onClick={handleDemoClick}
                    disabled={isConnecting}
                    className={`relative rounded-full bg-black text-white transition-all duration-300 hover:scale-105 ${
                      isConnecting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                    } w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64`}
                    style={{ margin: '0 0.5rem' }}
                  >
                    {isConnecting ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                    ) : (
                      <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  {/* Removed text below microphone button for cleaner UI */}
                </div>
                {/* Agents on the right (independent selector) */}
                <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-end sm:pl-6 w-full sm:w-auto justify-center" style={{zIndex: 10, position: 'relative'}}>
                  {[0,1,2,3].map((index) => (
                    <button
                      key={voiceOptions[index].id}
                      ref={selectedVoiceRight === index ? selectedVoiceRightRef : undefined}
                      onClick={() => setSelectedVoiceRight(index)}
                      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-200 font-medium text-xs sm:text-sm md:text-base ${
                        selectedVoiceRight === index 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-black border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ minWidth: '80px', textAlign: 'center', position: 'relative', zIndex: 10 }}
                    >
                      <span style={{ position: 'relative', zIndex: 10 }}>{voiceOptions[index].name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Demo Interface */}
            <div className="max-w-2xl mx-auto w-full px-2 sm:px-0">
              
              {/* Removed demo button and text below microphone */}

              {/* Status Messages */}
              <div className="text-center space-y-2 sm:space-y-4">
                {conversationStatus && (
                  <div className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg">
                    <p className="text-black text-sm">{conversationStatus}</p>
                  </div>
                )}
                
                {error && (
                  <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm mb-2">{error}</p>
                    <button 
                      onClick={resetDemoState}
                      className="text-red-600 text-xs underline hover:text-red-800 transition-colors"
                    >
                      Try again
                    </button>
                  </div>
                )}

                {(isRecording || isConnected) && (
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full ${
                      isAudioPlaying 
                        ? 'bg-blue-500 animate-pulse' 
                        : isConnected 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-gray-700 text-xs sm:text-sm">
                      {isAudioPlaying 
                        ? `${voiceOptions[selectedVoice].name} is speaking...`
                        : isConnected 
                        ? `Connected to ${voiceOptions[selectedVoice].name} - Speak now` 
                        : 'Connecting...'}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* Features List */}
              {!isRecording && !isConnected && (
                <div className="mt-10 sm:mt-16 w-full px-1 sm:px-4">
                  <div className="overflow-x-auto custom-scrollbar">
                    <div className="flex gap-4 sm:gap-20 pb-4 min-w-max lg:justify-center px-2 sm:px-4 lg:px-0">
                      {[
                        { title: 'Natural Conversations', desc: 'AI that understands context and emotions' },
                        { title: 'Realistic Voice', desc: 'High-quality voice cloning technology' },
                        { title: 'Instant Response', desc: 'Minimal latency for smooth interactions' },
                        { title: 'Multilingual', desc: 'Support for multiple languages and accents' },
                        { title: 'Adaptive', desc: 'Learns and adapts to your communication style' },
                        { title: 'Secure', desc: 'Your data remains private and protected' }
                      ].map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex-shrink-0 w-48 sm:w-64 text-center p-3 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 bg-white"
                        >
                          <h4 className="text-black font-semibold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
          </div>
        </div>
        </div>
        
        {/* Calendar AI Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            activeTab === 'calendar' 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
          }`}
        >
          <div className="relative py-8 md:py-10">
            {/* Animated grid background with white vignette overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <svg width="100%" height="100%" className="w-full h-full animate-pulse" style={{opacity:0.08}}>
                <defs>
                  <pattern id="calendar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#calendar-grid)" />
              </svg>
              {/* White vignette overlay for soft fade at corners */}
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 1,
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
              }} />
            </div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div className={`text-center mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Calendar AI Revolution
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Calendarul care gândește și acționează pentru tine cu AI avansat. Programează întâlniri doar vorbind cu asistentul tău digital.
                </p>
              </div>
              
              {/* AI Chat Simulation */}
              <div className="max-w-xl mx-auto mb-10">
                <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 animate-fade-in">
                  {aiMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`px-4 py-2 rounded-2xl text-sm max-w-xs break-words shadow-md transition-all duration-300 ${
                        msg.from === 'ai'
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                          : 'bg-white text-black border border-gray-200'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated Calendar */}
              <div className="flex flex-col items-center justify-center gap-8 mb-12 transition-all duration-1000 delay-200">
                <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-black">Iulie 2025</h3>
                    <div className="space-x-2">
                      <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">Prev</button>
                      <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">Next</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {['D','L','Ma','Mi','J','V','S'].map(day => (
                      <div key={day} className="text-gray-500 font-medium">{day}</div>
                    ))}
                    {/* July 2025 starts on Tuesday (so 1 empty cell) */}
                    <div></div>
                    {Array.from({length: 31}, (_,i) => (
                      <div
                        key={i+1}
                        className={`py-2 rounded-lg cursor-pointer font-medium transition-all duration-300
                          ${selectedDate === i+1
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white scale-110 shadow-lg'
                            : 'text-black hover:bg-gray-100'}
                        `}
                        onClick={() => handleDateClick(i+1)}
                        style={{position:'relative'}}
                      >
                        {i+1}
                        {selectedDate === i+1 && (
                          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full animate-bounce shadow">AI</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
              <div className={`text-center mt-4 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <p className="text-gray-600 mb-6">
                  Calendar AI inteligent, orchestrare campanii, automatizare programări. Încearcă acum!
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  Programează cu AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

