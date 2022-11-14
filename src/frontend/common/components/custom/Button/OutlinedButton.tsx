import { FC } from 'react'
import Link from 'next/link'

import { TButtonProps } from './Button'

export const OutlinedButton: FC<Props> = ({ text, link, className, onClick }) => {
  if (link) {
    return (
      <Link href={link.href}>
        <a
          style={{ letterSpacing: 1 }}
          className={`bg-none text-black border border-black hover:bg-black hover:text-white transition ${className}`}
        >
          {text}
        </a>
      </Link>
    )
  }

  return (
    <button
      style={{ letterSpacing: 1 }}
      className={`bg-none text-black border border-black hover:bg-black hover:text-white transition ${className}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  )
}

type Props = TButtonProps
