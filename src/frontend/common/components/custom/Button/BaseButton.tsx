import { FC } from 'react'
import Link from 'next/link'

import { TButtonProps } from './Button'

export const BaseButton: FC<Props> = ({ text, link, className, disabled, type, onClick }) => {
  if (link) {
    return (
      <Link href={link.href}>
        <a
          style={{ letterSpacing: 1 }}
          className={`bg-primary text-white hover:bg-primary-light transition ${className}`}
        >
          {text}
        </a>
      </Link>
    )
  }

  return (
    <button
      style={{ letterSpacing: 1 }}
      className={`bg-primary text-white hover:bg-primary-light transition ${
        disabled && 'bg-primary-light'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
    >
      {text}
    </button>
  )
}

type Props = TButtonProps
