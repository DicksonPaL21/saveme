import ArrowDown from '@/components/ArrowDown'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import BmcWidget from '@/components/widget/Bmc'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'SaveMe - Video Downloader',
  description: `SaveMe is a web-based video downloader application that allows users to effortlessly download videos from popular
    platforms, including Facebook, YouTube, TikTok, and Instagram Reels. With SaveMe, you can easily save your favorite
    videos for offline viewing, making it a must-have tool for content enthusiasts.`,
}

type LayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={cn(
          'flex min-h-dvh flex-col font-[family-name:var(--font-geist-sans)] antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
        <ArrowDown />
        <BmcWidget />
      </body>
    </html>
  )
}
