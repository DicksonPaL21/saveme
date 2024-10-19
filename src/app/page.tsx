import Features from '@/components/Features'
import Footer from '@/components/Footer'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions'
import HowToDownload from '@/components/HowToDownload'
import More from '@/components/More'
import { PlaceholdersAndVanishInputDemo } from '@/components/PlaceholdersAndVanishInputDemo'
import { SVGs } from '@/components/ui/pulse-beam'

export default function Home() {
  return (
    <div className="flex flex-col container min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-24 items-center mb-24">
        <div className="flex h-auto relative items-center justify-center overflow-hidden w-full">
          <PlaceholdersAndVanishInputDemo />
          <div className="absolute inset-0 flex items-center justify-center">
            <SVGs />
          </div>
        </div>
        <p className="max-w-4xl text-center mx-auto font-light text-xs sm:text-base tracking-wide leading-relaxed">
          <span className="font-bold">SaveMe</span> is a web-based video
          downloader application that allows users to effortlessly download
          videos from popular platforms, including Facebook, YouTube, TikTok,
          and Instagram Reels. With SaveMe, you can easily save your favorite
          videos for offline viewing, making it a must-have tool for content
          enthusiasts.
        </p>
        <HowToDownload />
        <Features />
        <FrequentlyAskedQuestions />
        <More />
      </main>
      <Footer />
    </div>
  )
}
