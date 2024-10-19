import Features from '@/components/Features'
import Footer from '@/components/Footer'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions'
import HowToDownload from '@/components/HowToDownload'
import More from '@/components/More'
import PlaceholdersAndVanishInputDemo from '@/components/PlaceholdersAndVanishInputDemo'
import SparklesPreview from '@/components/SparklesPreview'
import SupportedResources from '@/components/SupportedResources'
import { SVGs } from '@/components/ui/pulse-beam'

export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="mb-24 flex flex-col items-center gap-24">
        <div className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
          <PlaceholdersAndVanishInputDemo />
          <div className="absolute inset-0 flex items-center justify-center">
            <SVGs />
          </div>
        </div>
        <p className="mx-auto max-w-4xl text-center text-xs font-light leading-relaxed tracking-wide sm:text-base">
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
        <SupportedResources />
        <SparklesPreview />
      </main>
      <Footer />
    </div>
  )
}
