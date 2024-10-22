import { CustomLink } from '.'

const QuickLinks = () => {
  return (
    <div className="ml-auto flex flex-col">
      <h4 className="font-semibold text-black dark:text-white">Quick Links</h4>
      <CustomLink className="my-2" href={{ pathname: '/home' }} label="Home" />
      <CustomLink
        className="my-2"
        href={{ pathname: '/about' }}
        label="About"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/tools' }}
        label="Tools"
      />
      <CustomLink className="my-2" href={{ pathname: '/blog' }} label="blog" />
      <CustomLink
        className="my-2"
        href={{ pathname: '/reviews' }}
        label="Reviews"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/contact' }}
        label="Contact"
      />
      <CustomLink
        className="my-2"
        href={{ pathname: '/languages-supported' }}
        label="Languages"
      />
    </div>
  )
}

export default QuickLinks
