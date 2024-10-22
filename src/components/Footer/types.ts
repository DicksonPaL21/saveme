import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps<'object'> & {
  label: string
}
