'use client'

import { useParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { DataProps, PlatformContext, PlatformProviderProps } from './typs'

export const usePlatformContext = () => {
  const context = useContext(PlatformContext)
  if (context === undefined) {
    throw new Error('usePlatformContext must be used within a PlatformProvider')
  }
  return context
}

export const PlatformProvider: React.FC<PlatformProviderProps> = ({
  children,
}) => {
  const [value, setValue] = useState<DataProps | undefined>(undefined)
  const [platform] = String(useParams().slug).split('-')

  return (
    <PlatformContext.Provider value={{ platform, value, setValue }}>
      {children}
    </PlatformContext.Provider>
  )
}
