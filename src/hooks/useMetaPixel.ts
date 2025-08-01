'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq: any
  }
}

export const useMetaPixel = () => {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters)
    }
  }

  const trackCustomEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters)
    }
  }

  // Track page views automatically on route changes
  const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }

  // Common events you might want to track
  const trackLead = (parameters?: any) => {
    trackEvent('Lead', parameters)
  }

  const trackContact = (parameters?: any) => {
    trackEvent('Contact', parameters)
  }

  const trackCompleteRegistration = (parameters?: any) => {
    trackEvent('CompleteRegistration', parameters)
  }

  const trackInitiateCheckout = (parameters?: any) => {
    trackEvent('InitiateCheckout', parameters)
  }

  const trackPurchase = (value: number, currency: string = 'USD', parameters?: any) => {
    trackEvent('Purchase', {
      value,
      currency,
      ...parameters
    })
  }

  return {
    trackEvent,
    trackCustomEvent,
    trackPageView,
    trackLead,
    trackContact,
    trackCompleteRegistration,
    trackInitiateCheckout,
    trackPurchase
  }
}
