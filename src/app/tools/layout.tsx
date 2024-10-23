import Features from '@/components/Features'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions'
import HowToDownload from '@/components/HowToDownload'
import More from '@/components/More'
import PlaceholdersAndVanishInputDemo from '@/components/PlaceholdersAndVanishInputDemo'
import SupportedResources from '@/components/SupportedResources'
import { SVGs } from '@/components/ui/pulse-beam'
import { PlatformProvider } from './providers'

type LayoutProps = Readonly<{ children: React.ReactNode }>

export default function Layout({ children }: LayoutProps) {
  return (
    <PlatformProvider>
      <main className="container mb-24 flex flex-col items-center gap-28">
        <div className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
          <PlaceholdersAndVanishInputDemo />
          <div className="absolute inset-0 flex items-center justify-center">
            <SVGs />
          </div>
        </div>
        {/* <div className="bg-grid-small-black dark:bg-grid-small-white w-dvw py-28 shadow-[inset_0_0_60px_0_black]">
    <div className="mx-auto flex w-full max-w-4xl flex-col">
    <VideoWrapper />
    </div>
    </div> */}

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
        {children}
      </main>
    </PlatformProvider>
  )
}
