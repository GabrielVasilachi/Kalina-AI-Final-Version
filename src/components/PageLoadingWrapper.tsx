'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AppLoadingScreen } from '@/components/AppLoadingScreen'

interface PageLoadingWrapperProps {
  children: React.ReactNode
}

/**
 * PageLoadingWrapper - Conditionally shows loading screen only on main page
 * 
 * Loading screen will appear only when:
 * 1. User visits the main page (/) for the first time in a browser session
 * 2. User reloads the main page
 * 3. User opens the main page in a fresh browser tab/window
 * 
 * Loading screen will NOT appear when:
 * - Navigating to any other page (/about, /features, etc.)
 * - Returning to main page after visiting other pages in the same session
 * - Navigating between other pages
 */
export function PageLoadingWrapper({ children }: PageLoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [hasShownLoadingScreen, setHasShownLoadingScreen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    
    // Only show loading screen on the main page
    const isMainPage = pathname === '/'
    
    if (!isMainPage) {
      setIsLoading(false)
      setHasShownLoadingScreen(true)
      return
    }

    // Check if we've already shown the loading screen in this browser session
    const hasShownLoading = sessionStorage.getItem('hasShownLoadingScreen')
    
    // Detect if this is a page reload or fresh visit
    let isPageReload = false
    if (typeof window !== 'undefined') {
      // Check performance navigation API
      const navigationEntries = window.performance.getEntriesByType('navigation')
      if (navigationEntries.length > 0) {
        const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming
        isPageReload = navigationEntry.type === 'reload'
      }
      
      // Fallback: check if this is the first page load in the session
      const isFirstLoad = !window.history.state || window.performance.navigation?.type === 1
      isPageReload = isPageReload || isFirstLoad
    }
    
    // Show loading screen on main page in these cases:
    // 1. First time visiting the site (no sessionStorage entry)
    // 2. Page reload
    // 3. Fresh browser session
    const shouldShowLoading = isMainPage && (!hasShownLoading || isPageReload)
    
    if (shouldShowLoading) {
      setIsLoading(true)
      setHasShownLoadingScreen(false)
    } else {
      setIsLoading(false)
      setHasShownLoadingScreen(true)
    }
  }, [pathname])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setHasShownLoadingScreen(true)
    // Mark that we've shown the loading screen in this browser session
    // This will prevent it from showing again until the session ends or page is reloaded
    sessionStorage.setItem('hasShownLoadingScreen', 'true')
  }

  // Clear the loading screen flag when navigating away from main page
  useEffect(() => {
    return () => {
      // Keep the session flag to prevent loading screen on return visits
      // Only clear on actual page reload (handled in the main useEffect)
    }
  }, [pathname])

  // Prevent hydration mismatch by not showing loading screen on server
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <>
      {isLoading && <AppLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
}
