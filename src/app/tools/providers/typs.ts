import { createContext, ReactNode } from 'react'

export interface DataProps {
  [key: string]: string | number | object | undefined | null
}
interface PlatformContextProps {
  platform: string
  value: DataProps | undefined
  setValue: (newValue: DataProps) => void
}

export const PlatformContext = createContext<PlatformContextProps | undefined>(
  undefined
)

export interface PlatformProviderProps {
  children: ReactNode
}
