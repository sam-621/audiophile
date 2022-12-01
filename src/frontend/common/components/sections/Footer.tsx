import { useRouter } from 'next/router'
import { LogoLight } from '../atoms'
import { NavItems } from '../items'

const routesNotToShow = ['/sign-up', '/sign-in']

export const Footer = () => {
  const { pathname } = useRouter()

  if (routesNotToShow.includes(pathname)) return null

  return (
    <footer className="bg-secondary px-6 pb-9 md:px-10 md:pb-14 md:pt-0 xl:px-40 xl:pb-20 xl:pt-0">
      <div className="flex flex-col items-center gap-12 mb-12 md:items-start">
        <div className="w-[101px] h-[4px] bg-primary"></div>
        <div className="xl:flex xl:items-center xl:justify-between w-full">
          <div className="mb-12 xl:mb-0 flex justify-center md:block">
            <LogoLight />
          </div>
          <NavItems className="flex flex-col gap-4 md:flex-row md:gap-8" />
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
