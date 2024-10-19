'use client'

import axios from 'axios'
import { useState } from 'react'

const Downloader: React.FC = () => {
  const [url, setUrl] = useState<string>('')
  const [downloadLink, setDownloadLink] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null) // Reset error state

    try {
      const response = await axios.post(
        '/api/download',
        { url },
        {
          responseType: 'blob',
          timeout: 10000, // Set timeout to 10 seconds
        }
      )

      const _url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = _url
      link.setAttribute('download', 'video.mp4') // Set the default filename
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (err) {
      console.error(err)
      setError('Failed to download the video. Please check the URL.')
    }
  }

  return (
    <div className="container flex h-[calc(100vh-72px)] flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="grid h-full place-items-center">
        <div>
          <h1>Video Downloader</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter YouTube video URL"
              required
              className="w-full text-neutral-900"
            />
            <button type="submit">Download</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </main>
    </div>
  )
}

export default Downloader
