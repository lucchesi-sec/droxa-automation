'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  inp?: number // Interaction to Next Paint
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('PerformanceObserver' in window)) return

    const metrics: PerformanceMetrics = {}
    const observers: PerformanceObserver[] = []

    // First Contentful Paint
    if (PerformanceObserver.supportedEntryTypes.includes('paint')) {
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.fcp = entry.startTime
          }
        })
      })
      paintObserver.observe({ entryTypes: ['paint'] })
      observers.push(paintObserver)
    }

    // Largest Contentful Paint
    if (PerformanceObserver.supportedEntryTypes.includes('largest-contentful-paint')) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          metrics.lcp = lastEntry.startTime
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      observers.push(lcpObserver)
    }

    // Cumulative Layout Shift
    if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
      let clsValue = 0
      
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const layoutEntry = entry as LayoutShift
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value
            metrics.cls = clsValue
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      observers.push(clsObserver)
    }

    // Interaction to Next Paint (replacing FID)
    if (PerformanceObserver.supportedEntryTypes.includes('event')) {
      const inpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            metrics.inp = entry.duration
          }
        })
      })
      inpObserver.observe({ entryTypes: ['first-input'] })
      observers.push(inpObserver)
    }

    // Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      metrics.ttfb = navigation.responseStart
    }

    // Log metrics after page load (only in development)
    const logMetrics = () => {
      if (process.env.NODE_ENV === 'development') {
        // Development-only performance logging - will be removed in production build
         
        console.log('📊 Performance Metrics:', metrics)
      }

      // Send metrics to analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'performance_metrics', {
          custom_params: metrics
        })
      }
    }

    let timeoutId: NodeJS.Timeout
    const handleLoad = () => {
      timeoutId = setTimeout(logMetrics, 1000)
    }

    window.addEventListener('load', handleLoad)

    // Cleanup function
    return () => {
      window.removeEventListener('load', handleLoad)
      if (timeoutId) clearTimeout(timeoutId)
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  return null
}

// Type definitions for better TypeScript support
interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}
