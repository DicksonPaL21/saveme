import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-6 border-t py-24 text-xs font-extralight leading-relaxed tracking-wide sm:text-sm">
      <p>©️ 2024 SaveMe. All Rights Reserved</p>
      <div className="flex gap-4">
        <Link href="/terms-of-service" className="hover:text-yellow-500">
          Terms of Service
        </Link>
        <Link href="/privacy-policy" className="hover:text-yellow-500">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
