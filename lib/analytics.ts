export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// TypeScript declaration for the gtag function
declare global {
  interface Window {
    gtag: (command: string, config: string, params: Record<string, unknown>) => void
  }
}

// Validate GA_TRACKING_ID (only warn in development)
if (typeof window === 'undefined' && !GA_TRACKING_ID && process.env.NODE_ENV === 'development') {
  // Development warning only - console.log will be removed in production via Next.js config
   
  console.warn('Google Analytics ID not configured. Set NEXT_PUBLIC_GA_ID environment variable.')
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}