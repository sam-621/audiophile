import Link from 'next/link'
import { FC } from 'react'
import { TButtonProps } from './Button'

export const OutlinedButton: FC<Props> = ({ text, link, className, onClick }) => {
  if (link) {
    return (
      <Link href={link.href}>
        <a
          className={`bg-none text-black border border-black hover:bg-black hover:text-white transition ${className}`}
        >
          {text}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={`bg-none text-black border border-black hover:bg-black hover:text-white transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

type Props = TButtonProps
