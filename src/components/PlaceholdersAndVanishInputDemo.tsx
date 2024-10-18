'use client'

import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    'Paste your video link here',
    'https://www.youtube.com/watch?v=...',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className="relative h-[40rem] w-full max-w-2xl flex flex-col justify-center items-center px-4 z-10">
      <div className="absolute top-52 sm:top-44 text-center">
        <h2 className="text-xl sm:text-5xl dark:text-white text-black font-extrabold">
          <span className="bg-gradient-to-b from-zinc-800 to-zinc-950 dark:from-zinc-50 dark:to-zinc-200 text-transparent bg-clip-text">
            YouTube
          </span>{' '}
          <span className="bg-gradient-to-b from-amber-400 to-yellow-500 text-transparent bg-clip-text">
            Video Downloader
          </span>
        </h2>
        <p className="mt-1.5 dark:text-white text-black text-xs sm:text-base font-light tracking-wide leading-relaxed">
          A tool designed for downloading YouTube videos in high-definition
          quality
        </p>
      </div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}
