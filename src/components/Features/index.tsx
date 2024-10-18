import { HoverEffect } from '../ui/card-hover-effect'

const projects = [
  {
    title: '👀 User-friendly',
    description:
      "When selecting a YouTube downloader, it's preferable to minimize the number of clicks required, which is achievable only if the downloader offers an intuitive interface.",
  },
  {
    title: '📈 High-Quality downloads',
    description:
      'When searching for a YouTube video downloader, choose one that can download high-resolution videos quickly.',
  },
  {
    title: '🌏 Supports multiple formats',
    description:
      "It's also essential to select software that supports multiple formats, such as .mkv and .mp4. This ensures you can easily watch your videos on any device.",
  },
  {
    title: '🔥 Lightning speed',
    description:
      'You have better things to do than wait for downloads to finish, so choose a downloader that is extremely fast.',
  },
]

const Features = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg sm:text-4xl dark:text-white text-black font-extrabold text-center max-w-3xl">
        What features should you consider when choosing a YouTube video
        downloader for both Shorts and longer videos?
      </h3>
      <div className="mt-10 w-full max-w-4xl">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default Features
