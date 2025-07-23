'use client'

import { useState } from 'react'
import { Providers } from './providers'
import { AppLoadingScreen } from '../components/AppLoadingScreen'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <AppLoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Providers>
          {children}
        </Providers>
      </div>
    </>
  )
}
