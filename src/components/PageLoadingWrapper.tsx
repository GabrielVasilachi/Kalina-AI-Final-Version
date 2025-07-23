'use client'

import { useState, useEffect } from 'react'
import { AppLoadingScreen } from '@/components/AppLoadingScreen'

interface PageLoadingWrapperProps {
  children: React.ReactNode
}

export function PageLoadingWrapper({ children }: PageLoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Prevent hydration mismatch by not showing loading screen on server
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <>
      {isLoading && <AppLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
    </>
  )
}
