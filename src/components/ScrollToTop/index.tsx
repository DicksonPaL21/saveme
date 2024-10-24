'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

const ScrollToTop = () => {
  const pathname = usePathname()

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return <></>
}

export default ScrollToTop
