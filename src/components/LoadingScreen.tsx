'use client'

import { useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleVideoEnd = () => {
    console.log('Video ended')
    setIsVideoEnded(true)
    // Only complete loading when video actually ends
    onLoadingComplete()
  }

  const handleVideoError = (e: any) => {
    console.log('Video failed to load:', e)
    setVideoError(true)
    // Redirect to main page immediately if video fails to load
    window.location.href = '/'
  }

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${isVideoEnded || videoError ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <video
        className="loading-screen-video"
        autoPlay
        muted
        playsInline // Critical for iOS Safari
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
          background: '#000'
        }}
      >
        <source src="/Loading-screen.mp4" type="video/mp4" />
      </video>
      
      {/* Skip button for accessibility */}
      <button
        onClick={onLoadingComplete}
        className="absolute bottom-8 right-8 px-4 py-2 bg-black/50 text-white rounded-lg text-sm hover:bg-black/70 transition-colors backdrop-blur-sm"
        aria-label="Skip loading animation"
        >
        Skip
      </button>
    </div>
  )
}
