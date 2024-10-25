import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps<'object'> & {
  className?: string
  label: string
}
