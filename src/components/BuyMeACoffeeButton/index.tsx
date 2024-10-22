import Image from 'next/image'

const BuyMeACoffeeButton = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/dicksonpal21"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
        alt="Buy Me A Coffee"
        width="217"
        height="60"
      />
    </a>
  )
}

export default BuyMeACoffeeButton
