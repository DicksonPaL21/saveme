'use client'

import { useParams } from 'next/navigation'
import { createContext, useContext, useState } from 'react'
import { INITIAL_VALUE } from './constants'
import {
  ContentProps,
  PlatformContextProps,
  PlatformProviderProps,
} from './typs'

const PlatformContext = createContext<PlatformContextProps>(INITIAL_VALUE)

export const usePlatformContext = () => useContext(PlatformContext)

export const PlatformProvider: React.FC<PlatformProviderProps> = ({
  children,
}) => {
  const [content, setContent] = useState<ContentProps | undefined>(undefined)
  const [platform] = String(useParams().slug).split('-')

  return (
    <PlatformContext.Provider value={{ platform, content, setContent }}>
      {children}
    </PlatformContext.Provider>
  )
}
