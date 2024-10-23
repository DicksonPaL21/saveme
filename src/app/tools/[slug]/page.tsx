'use client'

import { usePlatformContext } from '../providers'

export default function VideoDownloader() {
  const { platform } = usePlatformContext()

  return <div>{platform}</div>
}
