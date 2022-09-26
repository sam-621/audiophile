import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TButtonProps } from './Button'

export const TextButton: FC<Props> = ({ text, link, className, onClick }) => {
  if (link) {
    return (
      <Link href={link.href}>
        <a
          className={`flex items-center gap-2 text-xs bg-none text-subtitle hover:text-primary transition ${className}`}
        >
          <span>{text}</span>
          <Image src="/img/icons/arrow-right.svg" alt="Arrow right" width={5} height={10} />
        </a>
      </Link>
    )
  }

  return (
    <button
      className={`flex items-center gap-2 text-xs bg-none text-subtitle hover:text-primary transition ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <Image src="/img/icons/arrow-right.svg" alt="Arrow right" width={5} height={10} />
    </button>
  )
}

type Props = TButtonProps