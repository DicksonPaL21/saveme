import { ReactNode } from 'react'

export interface ContentProps {
  [key: string]: string | number | object | undefined | null
}
export interface PlatformContextProps {
  platform: string
  content: ContentProps | undefined
  setContent: (newValue: ContentProps) => void
}

export interface PlatformProviderProps {
  children: ReactNode
}
