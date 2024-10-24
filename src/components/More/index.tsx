'use client'

import { usePlatformContext } from '@/app/tools/providers'
import { capitalize } from '@/utils/formatters/string'

const More = () => {
  const { platform } = usePlatformContext()

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="max-w-3xl text-center text-lg font-extrabold text-black dark:text-white sm:text-4xl">
          Why is SaveMe considered the best tool for downloading{' '}
          {capitalize(platform)} videos?
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
        <p className="mx-auto text-center text-xs font-light leading-relaxed tracking-wide sm:text-base">
          {capitalize(platform)} is essential for your daily entertainment. With
          SaveMe, you can easily and quickly convert and download{' '}
          {capitalize(platform)} videos to your device for offline enjoyment.
        </p>
        <div className="mt-10">
          <p className="py-1.5 text-xs font-light leading-relaxed tracking-wide sm:text-base">
            <span className="font-bold">🔥Free to Use:</span> The user interface
            of the {capitalize(platform)} Video Downloader is very simple,
            requiring no technical expertise.
          </p>

          <p className="py-1.5 text-xs font-light leading-relaxed tracking-wide sm:text-base">
            <span className="font-bold">🔥Supports All Popular Languages:</span>{' '}
            This is a global tool that accommodates all widely spoken languages.
          </p>

          <p className="py-1.5 text-xs font-light leading-relaxed tracking-wide sm:text-base">
            <span className="font-bold">
              🔥No Registration or Software Installation Needed:
            </span>{' '}
            SaveMe {capitalize(platform)} Video Downloader is web-based, so
            there&apos;s no need to install software or create an account.
          </p>

          <p className="py-1.5 text-xs font-light leading-relaxed tracking-wide sm:text-base">
            <span className="font-bold">🔥Compatible with All Devices:</span>{' '}
            This platform works seamlessly on major devices, including mobiles,
            desktops, tablets, and more.
          </p>

          <p className="py-1.5 text-xs font-light leading-relaxed tracking-wide sm:text-base">
            <span className="font-bold">🔥Fast Download Speeds:</span> Our{' '}
            {capitalize(platform)} Video Downloader boasts the fastest
            conversion and download speeds, reaching up to 1GB/s.
          </p>
        </div>
      </div>
    </div>
  )
}

export default More
