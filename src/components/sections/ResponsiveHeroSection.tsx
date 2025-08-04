'use client'

import { useEffect, useState } from 'react'
import { HeroSectionMobile } from './HeroSectionMobile'
import { HeroSectionDesktop } from './HeroSectionDesktop'

export function ResponsiveHeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 1024 // lg breakpoint
      setIsMobile(isMobileDevice)
      setIsLoaded(true)
    }

    // Initial check
    checkDevice()

    // Listen for resize events
    window.addEventListener('resize', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  // Prevent hydration mismatch by not rendering until client-side
  if (!isLoaded) {
    return (
      <section className="relative py-0 overflow-hidden bg-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </section>
    )
  }

  return isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />
}

// Export both individual components for direct use if needed
export { HeroSectionMobile, HeroSectionDesktop }
