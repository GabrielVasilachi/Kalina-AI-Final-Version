# Google Analytics Implementation

This project now includes Google Analytics integration with your tracking ID: `G-NLNTL0N7HN`.

## Setup

The Google Analytics implementation is already configured and will automatically:
- Track page views on all pages
- Load the Google Analytics script asynchronously
- Provide helper functions for custom event tracking

## Environment Variables

Make sure you have the following environment variable set:

```bash
NEXT_PUBLIC_GA_ID=G-NLNTL0N7HN
```

This is already configured in:
- `.env.local` (for local development)
- `.env.example` (template for production)

## Automatic Page Tracking

Page views are automatically tracked for all pages in your app. No additional setup required.

## Custom Event Tracking

You can track custom events using the helper functions in `/src/lib/analytics.ts`:

```tsx
import { trackButtonClick, trackFormSubmission, trackDownload } from '@/lib/analytics'

// Track button clicks
const handleClick = () => {
  trackButtonClick('CTA Button')
  // Your button logic here
}

// Track form submissions
const handleSubmit = () => {
  trackFormSubmission('Contact Form')
  // Your form logic here
}

// Track downloads
const handleDownload = () => {
  trackDownload('Product Brochure.pdf')
  // Your download logic here
}
```

## Manual Event Tracking

For more control, you can use the base tracking function directly:

```tsx
import { trackEvent } from '@/components/GoogleAnalytics'

// Track any custom event
trackEvent('action', 'category', 'label', value)
```

## Testing

To verify Google Analytics is working:

1. Open your website in a browser
2. Open Chrome DevTools → Network tab
3. Look for requests to `googletagmanager.com`
4. Check your Google Analytics dashboard (may take 24-48 hours for data to appear)

## Production Deployment

When deploying to production, ensure the `NEXT_PUBLIC_GA_ID` environment variable is set in your hosting platform (Vercel, Netlify, etc.).

## Files Added/Modified

- `/src/components/GoogleAnalytics.tsx` - Main GA component
- `/src/components/GoogleAnalyticsProvider.tsx` - Provider for automatic page tracking
- `/src/hooks/useGoogleAnalytics.ts` - Hook for page view tracking
- `/src/types/gtag.d.ts` - TypeScript definitions
- `/src/lib/analytics.ts` - Helper functions for event tracking
- `/src/app/layout.tsx` - Added GA component
- `/src/app/providers.tsx` - Added GA provider
- `.env.local` - Local environment variables
- `.env.example` - Updated with your GA ID
