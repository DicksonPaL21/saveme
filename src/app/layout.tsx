import ArrowDown from '@/components/ArrowDown'
import Navbar from '@/components/Navbar'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn('antialiased', geistSans.variable, geistMono.variable)}
      >
        <Navbar />
        {children}
        <ArrowDown />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="dicksonpal21"
          data-description="Support me on Buy me a coffee!"
          data-message="Love our app? Buy us a coffee! Your support keeps us going."
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        />
      </body>
    </html>
  )
}
