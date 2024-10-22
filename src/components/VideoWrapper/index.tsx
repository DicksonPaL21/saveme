'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Download } from 'lucide-react'
import Image from 'next/image'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

import data from '@/public/test-data.json'

const VideoWrapper = () => {
  const links = data.links.filter(
    (link) => link.container === 'mp4' && link.hasAudio && link.hasVideo
  )
  console.log('cc-links', links)
  return (
    <Card className="z-10 flex w-full flex-row-reverse overflow-hidden rounded-2xl bg-white dark:bg-black">
      <CardHeader className="w-1/2">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {data.stats.description}
        </CardDescription>
        <div className="!mt-auto inline-flex justify-end gap-4">
          <Select>
            <SelectTrigger className="w-32 rounded-full">
              <SelectValue placeholder="Quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {links.map((link) => (
                  <SelectItem value={link.quality}>
                    {link.qualityLabel}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <HoverBorderGradient
            as="button"
            className="inline-flex items-center gap-2.5 text-sm text-primary-foreground dark:text-secondary-foreground sm:text-base"
          >
            <Download className="size-3.5 shrink-0 sm:size-4" />
            Download
          </HoverBorderGradient>
        </div>
      </CardHeader>
      <div className="w-1/2 p-1">
        <Image
          src={data.picture}
          alt={data.title}
          width="400"
          height="225"
          className="aspect-video w-full rounded-xl object-cover"
        />
      </div>
    </Card>
  )
}

export default VideoWrapper
