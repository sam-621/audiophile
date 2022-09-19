import Link from 'next/link'
import { FC } from 'react'
import { TButtonProps } from './Button'

export const BaseButton: FC<Props> = ({ text, link, className, onClick }) => {
  if (link) {
    return (
      <Link href={link.href}>
        <a className={`bg-primary text-white hover:bg-primary-light transition ${className}`}>
          {text}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={`bg-primary text-white hover:bg-primary-light transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

type Props = TButtonProps
