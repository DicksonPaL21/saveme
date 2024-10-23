import { createContext, ReactNode } from 'react'

interface PlatformContextProps {
  platform: string
  value: {}
  setValue: (newValue: {}) => void
}

export const PlatformContext = createContext<PlatformContextProps | undefined>(
  undefined
)

export interface PlatformProviderProps {
  children: ReactNode
}
