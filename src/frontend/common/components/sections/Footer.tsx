import Link from 'next/link'
import { LogoLight } from '../atoms'

export const Footer = () => {
  return (
    <footer className="bg-secondary px-6 flex flex-col items-center gap-12 pb-9">
      <div className="w-[101px] h-[4px] bg-primary"></div>
      <div>
        <LogoLight />
      </div>
      <nav className="flex flex-col gap-4">
        <Link href="/">
          <a className="text-white text-center font-bold text-xs" style={{ letterSpacing: 2 }}>
            HOME
          </a>
        </Link>
        <Link href="/category/headphones">
          <a className="text-white text-center font-bold text-xs" style={{ letterSpacing: 2 }}>
            HEADPHONES
          </a>
        </Link>
        <Link href="/category/speakers">
          <a className="text-white text-center font-bold text-xs" style={{ letterSpacing: 2 }}>
            SPEAKERS
          </a>
        </Link>
        <Link href="/category/earphones">
          <a className="text-white text-center font-bold text-xs" style={{ letterSpacing: 2 }}>
            EARPHONES
          </a>
        </Link>
      </nav>
      <p className="text-subtitle text-center">
        Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <span className="text-subtitle text-center font-bold">
        Copyright 2021. All Rights Reserved
      </span>
    </footer>
  )
}
