import { LinkProps as NextLinkProps } from 'next/link'
import { HTMLProps } from 'react'

export type LinkProps = NextLinkProps &
  HTMLProps<HTMLAnchorElement> & {
    label: string
  }
