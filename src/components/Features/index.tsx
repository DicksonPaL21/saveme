'use client'

import { usePlatformContext } from '@/app/tools/providers'
import { capitalize } from '@/utils/formatters/string'
import { HoverEffect } from '../ui/card-hover-effect'

const Features = () => {
  const { platform } = usePlatformContext()

  const projects = [
    {
      title: '👀 User-friendly',
      description: `When selecting a ${capitalize(platform)} video downloader, it's preferable to minimize the number of clicks required, which is achievable only if the downloader offers an intuitive interface.`,
    },
    {
      title: '📈 High-Quality downloads',
      description: `When searching for a ${capitalize(platform)} video downloader, choose one that can download high-resolution videos quickly.`,
    },
    {
      title: '🌏 Supports multiple formats',
      description: `It's also essential to select software that supports multiple formats, such as .mkv and .mp4. This ensures you can easily watch your videos on any device.`,
    },
    {
      title: '🔥 Lightning speed',
      description: `You have better things to do than wait for downloads to finish, so choose a downloader that is extremely fast.`,
    },
  ]

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="max-w-3xl text-center text-lg font-extrabold text-black dark:text-white sm:text-4xl">
          What features should you consider when choosing a{' '}
          {capitalize(platform)} video downloader for both Shorts and longer
          videos?
        </h3>

        <div className="relative h-3 w-full max-w-3xl">
          {/* Gradients */}
          <div className="absolute inset-x-1/2 top-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-1/2 top-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="mt-10 w-full max-w-4xl">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default Features
