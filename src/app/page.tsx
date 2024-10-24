import SparklesPreview from '@/components/SparklesPreview'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Home() {
  return (
    <main className="container mb-24 flex min-h-[60dvh] flex-col items-center gap-28">
      <BackgroundBeams className="top-0 z-0 h-[40rem]" />
      <div className="grid min-h-[40rem] place-items-center">
        <div className="z-10">
          <SparklesPreview className="h-[50rem] scale-[2.6]" sparkHidden />
          <h1 className="max-w-4xl bg-gradient-to-b from-zinc-800 to-zinc-950 bg-clip-text text-center font-sans text-xl font-bold text-transparent dark:from-zinc-50 dark:to-zinc-200 md:text-5xl">
            Download videos effortlessly and watch them anytime, anywhere.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-relaxed tracking-wide text-neutral-500 sm:text-sm">
            <span className="font-bold">SaveMe</span> is a web-based video
            downloader application that allows users to effortlessly download
            videos from popular platforms, including Facebook, YouTube, TikTok,
            and Instagram Reels. With SaveMe, you can easily save your favorite
            videos for offline viewing, making it a must-have tool for content
            enthusiasts.
          </p>
        </div>
      </div>
    </main>
  )
}
