'use client'

import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'

const PlaceholdersAndVanishInputDemo = () => {
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
    <div className="relative z-10 flex h-[40rem] w-full max-w-2xl flex-col items-center justify-center px-4">
      <div className="absolute top-52 text-center sm:top-44">
        <h2 className="text-xl font-extrabold text-black dark:text-white sm:text-5xl">
          <span className="bg-gradient-to-b from-zinc-800 to-zinc-950 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-200">
            YouTube
          </span>{' '}
          <span className="bg-gradient-to-b from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Video Downloader
          </span>
        </h2>
        <p className="mt-1.5 text-xs font-light leading-relaxed tracking-wide text-black dark:text-white sm:text-base">
          A tool designed for downloading YouTube videos in high-definition
          quality
        </p>
      </div>
      <HoverBorderGradient
        as="div"
        className="w-full bg-white p-0 dark:bg-black"
        containerClassName="w-full max-w-xl"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </HoverBorderGradient>
    </div>
  )
}

export default PlaceholdersAndVanishInputDemo