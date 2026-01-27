'use client'

import { useEffect, useState, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function TopLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const startLoading = useCallback(() => {
    setLoading(true)
    setProgress(0)
  }, [])

  const completeLoading = useCallback(() => {
    setProgress(100)
    setTimeout(() => {
      setLoading(false)
      setProgress(0)
    }, 200)
  }, [])

  // Listen for route changes
  useEffect(() => {
    completeLoading()
  }, [pathname, searchParams, completeLoading])

  // Animate progress while loading
  useEffect(() => {
    if (!loading) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        const increment = Math.max(1, (90 - prev) / 10)
        return Math.min(90, prev + increment)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [loading])

  // Intercept link clicks to start loading
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Only handle internal navigation
      const isInternal =
        href.startsWith('/') || href.startsWith(window.location.origin)
      const isNewTab = anchor.target === '_blank' || e.metaKey || e.ctrlKey
      const isAnchor = href.startsWith('#')

      if (isInternal && !isNewTab && !isAnchor) {
        startLoading()
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [startLoading])

  if (!loading && progress === 0) return null

  return (
    <div className='fixed top-0 left-0 right-0 z-[9999] h-0.5'>
      <div
        className='h-full bg-blue-500 transition-all duration-150 ease-out'
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  )
}
