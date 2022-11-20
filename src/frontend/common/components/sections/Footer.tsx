import Link from 'next/link'
import { LogoLight } from '../atoms'

export const Footer = () => {
  return (
    <footer className="bg-secondary px-6 pb-9 md:px-10 md:pb-14 md:pt-0 xl:px-40 xl:pb-20 xl:pt-0">
      <div className="flex flex-col items-center gap-12 mb-12 md:items-start">
        <div className="w-[101px] h-[4px] bg-primary"></div>
        <div className="xl:flex xl:items-center xl:justify-between w-full">
          <div className="mb-12 xl:mb-0">
            <LogoLight />
          </div>
          <nav className="flex flex-col gap-4 md:flex-row">
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
        </div>
      </div>
      <div className="flex flex-col gap-12 xl:w-1/2">
        <p className="text-subtitle text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <span className="text-subtitle text-center font-bold md:text-left">
          Copyright 2021. All Rights Reserved
        </span>
      </div>
    </footer>
  )
}
