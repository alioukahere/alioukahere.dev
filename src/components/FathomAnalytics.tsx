'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { load, trackPageview } from 'fathom-client'

function FathomTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID
    if (siteId) {
      load(siteId, {
        auto: false,
      })
    }
  }, [])

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_FATHOM_SITE_ID) {
      trackPageview()
    }
  }, [pathname, searchParams])

  return null
}

export default function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <FathomTracker />
    </Suspense>
  )
}
