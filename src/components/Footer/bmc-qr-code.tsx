import BMC_QR from '@/public/images/bmc_qr.png'
import Image from 'next/image'

const BmcQrCode = () => {
  return (
    <Image
      src={BMC_QR}
      alt="bmc-qr"
      width="700"
      height="700"
      className="size-40 rounded"
    />
  )
}

export default BmcQrCode
