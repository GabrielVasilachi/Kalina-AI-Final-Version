'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/components/GoogleAnalytics'

export function useGoogleAnalytics() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return

    // Get search params directly from window.location to avoid SSR issues
    const searchParams = new URLSearchParams(window.location.search)
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`
    
    trackPageView(url)
  }, [pathname, mounted])
}
