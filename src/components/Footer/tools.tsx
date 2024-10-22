import { CustomLink } from '.'

const Tools = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-black dark:text-white">Tools</h4>
      <CustomLink
        className="my-2"
        href={{ pathname: '/tools/youtube-video-downloader' }}
        label="Youtube Video Downloader"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/tools/facebook-video-downloader' }}
        label="Facebook Video Downloader"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/tools/instagram-video-downloader' }}
        label="Instagram Video Downloader"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/tools/tiktok-video-downloader' }}
        label="Tiktok Video Downloader"
      />
    </div>
  )
}

export default Tools
