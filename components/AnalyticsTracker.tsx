'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Combine pathname with search params for pageview tracking
      const url = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname
      pageview(url)
    }
  }, [pathname, searchParams])

  return null
}