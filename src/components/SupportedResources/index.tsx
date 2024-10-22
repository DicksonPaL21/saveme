import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

const SupportedResources = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <h3 className="text-md max-w-3xl text-center font-bold text-black dark:text-white sm:text-2xl">
          Supported Resources
        </h3>

        <div className="relative h-3 w-full max-w-3xl">
          {/* Gradients */}
          <div className="absolute inset-x-1/2 top-0 h-[2px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:w-1/3" />
          <div className="absolute inset-x-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:w-1/3" />
          <div className="absolute inset-x-1/2 top-0 h-[5px] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm md:w-1/5" />
          <div className="absolute inset-x-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent md:w-1/5" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="mt-10 grid w-full max-w-sm grid-cols-2 gap-4 md:max-w-2xl md:grid-cols-4">
        <Link
          href={{ pathname: '/youtube' }}
          className="flex w-full gap-4 rounded-lg bg-white p-4 leading-relaxed tracking-wide shadow-input dark:bg-neutral-900"
        >
          <YoutubeIcon className="shrink-0" />
          Youtube
        </Link>

        <Link
          href={{ pathname: '/facebook' }}
          className="flex w-full gap-4 rounded-lg bg-white p-4 leading-relaxed tracking-wide shadow-input dark:bg-neutral-900"
        >
          <FacebookIcon className="shrink-0" />
          Facebook
        </Link>

        <Link
          href={{ pathname: '/instagram' }}
          className="flex w-full gap-4 rounded-lg bg-white p-4 leading-relaxed tracking-wide shadow-input dark:bg-neutral-900"
        >
          <InstagramIcon className="shrink-0" />
          Instagram
        </Link>

        <Link
          href={{ pathname: '/tiktok' }}
          className="flex w-full gap-4 rounded-lg bg-white p-4 leading-relaxed tracking-wide shadow-input dark:bg-neutral-900"
        >
          <FacebookIcon className="shrink-0" />
          Tiktok
        </Link>
      </div>
    </div>
  )
}

export default SupportedResources
