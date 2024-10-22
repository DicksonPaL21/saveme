import { CustomLink } from '.'

const QuickLinks = () => {
  return (
    <div className="flex flex-col ml-auto">
      <h4 className="font-semibold text-black dark:text-white">Quick Links</h4>
      <CustomLink className="my-2" href="/home" label="Home" />
      <CustomLink className="my-2" href="/about" label="About" />
      <CustomLink className="my-2" href="/tools" label="Tools" />
      <CustomLink className="my-2" href="/blog" label="blog" />
      <CustomLink className="my-2" href="/reviews" label="Reviews" />
      <CustomLink className="my-2" href="/contact" label="Contact" />
      <CustomLink
        className="my-2"
        href="/languages-supported"
        label="Languages"
      />
    </div>
  )
}

export default QuickLinks
