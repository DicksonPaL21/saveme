import { cn } from '@/lib/utils'
import { SparklesCore } from '../ui/sparkles'

// text-3xl
const SparklesPreview = () => {
  return (
    <div className="flex h-[calc(100dvh_-_38rem)] w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full text-center">
        <h1 className="relative z-20 text-center text-7xl font-bold leading-none md:text-9xl">
          <span className="bg-gradient-to-b from-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-200">
            Save
          </span>
          <span className="bg-gradient-to-b from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Me
          </span>
        </h1>

        <span className="ml-[0.62rem] text-xs leading-relaxed tracking-[0.62rem] md:ml-[1.5rem] md:tracking-[1.5rem]">
          VIDEO DOWNLOADER
        </span>
      </div>

      <div className="relative h-20 w-full max-w-3xl md:h-40">
        {/* Gradients */}
        <div className="absolute inset-x-1/2 top-0 h-[2px] w-11/12 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm md:w-3/4" />
        <div className="absolute inset-x-1/2 top-0 h-px w-11/12 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent md:w-3/4" />
        <div className="absolute inset-x-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-1/2 top-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full bg-background',
            'max-md:[mask-image:radial-gradient(150px_100px_at_top,transparent_20%,white)]',
            'md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'
          )}
        />
      </div>
    </div>
  )
}

export default SparklesPreview
