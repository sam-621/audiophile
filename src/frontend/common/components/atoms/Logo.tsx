import Image from 'next/image'
import Link from 'next/link'

export const LogoLight = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/icons/logo-light.svg" alt="Logo" height={25} width={143} />
      </a>
    </Link>
  )
}

export const LogoDark = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/icons/logo-dark.svg" alt="Logo" height={25} width={143} />
      </a>
    </Link>
  )
}
