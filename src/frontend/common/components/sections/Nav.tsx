import { useAuth } from '@/front-hooks'
import Link from 'next/link'
import { LogoLight } from '../atoms/Logo'
import { Button } from '../custom'
import { Cart } from '../items/Cart'
import { MenuHamburger } from '../items/MenuHamburger'

export const Nav = () => {
  const { isAuth, isLoading } = useAuth()

  return (
    <>
      <nav className="bg-[#121212] relative flex justify-between items-center px-6 py-8 lg:pt-8 lg:px-28 xl:px-40 z-50">
        <MenuHamburger />
        <div className="flex justify-center items-center">
          <LogoLight />
        </div>
        <nav className="hidden lg:flex flex-col gap-4 md:flex-row">
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
        <div className="flex items-center gap-10 xl:gap-16">
          {!isAuth && !isLoading && (
            <div className="hidden lg:block">
              <Button variant="base" text="SIGN IN" className="py-2" link={{ href: '/sign-in' }} />
            </div>
          )}
          <Cart />
        </div>
      </nav>
      <hr className="border border-[#434343] border-t-0 z-50 relative md:mx-6 lg:mx-28 lg:mt xl:mx-40" />
    </>
  )
}
