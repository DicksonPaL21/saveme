import { NextResponse } from 'next/server'
import ytdl from 'ytdl-core'

export async function POST(request: Request) {
  const { url } = await request.json()

  if (!ytdl.validateURL(url)) {
    return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 })
  }

  const videoId = ytdl.getVideoID(url)
  const videoInfo = await ytdl.getInfo(videoId)
  const title = videoInfo.videoDetails.title

  const stream = ytdl(url, {
    quality: 'highestvideo', // You can change this based on your needs
  })

  // Create a new readable stream
  const readableStream = new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => {
        controller.enqueue(chunk)
      })

      stream.on('end', () => {
        controller.close()
      })

      stream.on('error', (err) => {
        console.error('Stream error:', err) // Log the error
        controller.error(err)
      })
    },
  })

  // Set headers for streaming
  const responseHeaders = new Headers({
    'Content-Disposition': `attachment; filename="${title}.mp4"`,
    'Content-Type': 'video/mp4',
    'Access-Control-Allow-Origin': '*', // Allow all origins
  })

  return new Response(readableStream, {
    headers: responseHeaders,
  })
}
