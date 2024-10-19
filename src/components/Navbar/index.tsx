'use client'

import { cn } from '@/lib/utils'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isFloating, setFloating] = useState(false)

  useMotionValueEvent(useScroll().scrollY, 'change', (value) => {
    setFloating(value > 100)
  })

  return (
    <div
      className={cn(
        'container sticky top-4 z-50 flex h-14 items-center justify-between rounded-full shadow-input',
        'w-full bg-transparent transition-all duration-500 ease-in-out dark:border-none',
        {
          'max-w-3xl bg-white shadow-[rgba(0,_0,_0,_0.1)_0px_0px_10px_0px] backdrop-blur-md dark:bg-neutral-900/60':
            isFloating,
        }
      )}
    >
      <span className="text-lg font-bold">
        <span className="text-white">Save</span>
        <span className="text-yellow-500">Me</span>
      </span>
      <div className="flex gap-1.5">
        <Link
          href="/youtube"
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Youtube
        </Link>
        <Link
          href="/facebook"
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Facebook
        </Link>
        <Link
          href="/instagram"
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Instagram
        </Link>
        <Link
          href="/tiktok"
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Tiktok
        </Link>
      </div>
    </div>
  )
}

export default Navbar
