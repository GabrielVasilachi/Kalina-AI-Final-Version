// Example usage of Google Analytics tracking functions
// Import this in any component where you want to track events

import { trackEvent } from '@/components/GoogleAnalytics'

// Example: Track button clicks
export function trackButtonClick(buttonName: string) {
  trackEvent('click', 'button', buttonName)
}

// Example: Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent('submit', 'form', formName)
}

// Example: Track video interactions
export function trackVideoPlay(videoName: string) {
  trackEvent('play', 'video', videoName)
}

// Example: Track file downloads
export function trackDownload(fileName: string) {
  trackEvent('download', 'file', fileName)
}

// Example: Track outbound link clicks
export function trackOutboundClick(url: string) {
  trackEvent('click', 'outbound_link', url)
}

// Example: Track scroll depth
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll', 'page_scroll', `${percentage}%`, percentage)
}

// Example: Track search queries
export function trackSearch(query: string) {
  trackEvent('search', 'site_search', query)
}

// Example: Track contact form submissions
export function trackContactForm(source: string) {
  trackEvent('contact', 'form_submission', source)
}
