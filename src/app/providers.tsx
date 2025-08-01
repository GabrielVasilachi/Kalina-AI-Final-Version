'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { GoogleAnalyticsProvider } from '@/components/GoogleAnalyticsProvider'

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <GoogleAnalyticsProvider>
      {children}
    </GoogleAnalyticsProvider>
  )
}
