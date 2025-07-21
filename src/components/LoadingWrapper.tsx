'use client'

import { useState, useEffect } from 'react'
import { LoadingScreen } from '@/components/LoadingScreen'

interface LoadingWrapperProps {
  children: React.ReactNode
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {children}
    </>
  )
}
