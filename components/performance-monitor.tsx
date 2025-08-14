'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay (Legacy, now INP)
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('PerformanceObserver' in window)) return

    const metrics: Partial<PerformanceMetrics> = {}

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
    }

    // Largest Contentful Paint
    if (PerformanceObserver.supportedEntryTypes.includes('largest-contentful-paint')) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.lcp = lastEntry.startTime
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Cumulative Layout Shift
    if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
      let clsValue = 0
      
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            metrics.cls = clsValue
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }

    // First Input Delay to Interaction to Next Paint
    if (PerformanceObserver.supportedEntryTypes.includes('event')) {
      const inpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            metrics.fid = entry.duration // This is now Interaction to Next Paint
          }
        })
      })
      inpObserver.observe({ entryTypes: ['first-input'] })
    }

    // Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      metrics.ttfb = navigation.responseStart
    }

    // Log metrics after page load
    const logMetrics = () => {
      console.log('📊 Performance Metrics:', {
        ...metrics,
        pageLoad: performance.timing ? performance.timing.loadEventEnd - performance.timing.navigationStart : 0
      })

      // You can send these metrics to your analytics service
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'performance_metrics', {
          custom_params: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb
          }
        })
      }
    }

    // Wait for all metrics to be collected
    window.addEventListener('load', () => setTimeout(logMetrics, 1000))

    return () => {
      window.removeEventListener('load', logMetrics)
    }
  }, [])

  return null
}