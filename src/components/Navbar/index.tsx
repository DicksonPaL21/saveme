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
        'w-full border border-transparent bg-transparent transition-all duration-500 ease-in-out',
        {
          'max-w-3xl border-black/5 bg-white/65 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_10px_0px] backdrop-blur dark:border-white/5 dark:bg-black/65':
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
          href={{ pathname: '/youtube' }}
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Youtube
        </Link>
        <Link
          href={{ pathname: '/facebook' }}
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Facebook
        </Link>
        <Link
          href={{ pathname: '/instagram' }}
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Instagram
        </Link>
        <Link
          href={{ pathname: '/tiktok' }}
          className="px-3 py-1.5 leading-relaxed tracking-wide transition-all duration-200 ease-in hover:rounded-full hover:bg-white/20"
        >
          Tiktok
        </Link>
      </div>
    </div>
  )
}

export default Navbar
