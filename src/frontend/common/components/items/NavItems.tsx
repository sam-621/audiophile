import Link from 'next/link'
import { FC } from 'react'

export const NavItems: FC<Props> = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <Link href="/">
        <a
          className="text-white text-center font-bold text-xs hover:text-primary transition"
          style={{ letterSpacing: 2 }}
        >
          HOME
        </a>
      </Link>
      <Link href="/category/headphones">
        <a
          className="text-white text-center font-bold text-xs hover:text-primary transition"
          style={{ letterSpacing: 2 }}
        >
          HEADPHONES
        </a>
      </Link>
      <Link href="/category/speakers">
        <a
          className="text-white text-center font-bold text-xs hover:text-primary transition"
          style={{ letterSpacing: 2 }}
        >
          SPEAKERS
        </a>
      </Link>
      <Link href="/category/earphones">
        <a
          className="text-white text-center font-bold text-xs hover:text-primary transition"
          style={{ letterSpacing: 2 }}
        >
          EARPHONES
        </a>
      </Link>
    </nav>
  )
}

type Props = {
  className?: string
}
