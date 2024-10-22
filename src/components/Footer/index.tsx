import { cn } from '@/lib/utils'
import Link from 'next/link'
import SparklesPreview from '../SparklesPreview'
import BmcQrCode from './bmc-qr-code'
import QuickLinks from './quick-links'
import Tools from './tools'
import { LinkProps } from './types'

export const CustomLink = ({ href, className, label, ...props }: LinkProps) => (
  <Link
    href={href}
    className={cn(
      'text-xs font-extralight leading-relaxed tracking-wide transition-all duration-200 ease-in hover:text-yellow-500 sm:text-sm',
      className
    )}
    {...props}
  >
    {label}
  </Link>
)

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-neutral-100 dark:border-white/[0.1]">
      <div className="container flex flex-wrap justify-between gap-28 py-20">
        <SparklesPreview className="h-auto w-auto" />
        <QuickLinks />
        <Tools />
        <BmcQrCode />
      </div>
      <div className="bg-white py-10 dark:bg-neutral-900">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <p className="mr-auto text-xs font-extralight leading-relaxed tracking-wide sm:text-sm">
            ©️ 2024 SaveMe. All Rights Reserved
          </p>
          <CustomLink
            href={{ pathname: '/terms-of-service' }}
            label="Terms of Service"
          />
          <CustomLink
            href={{ pathname: '/privacy-policy' }}
            label="Privacy Policy"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
