'use client'

import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

export function GoogleAnalyticsProvider({ children }: { children: React.ReactNode }) {
  useGoogleAnalytics()
  return <>{children}</>
}
