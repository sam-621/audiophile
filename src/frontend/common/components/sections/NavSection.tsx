import { useAuth } from '@/front-hooks'
import { LogoLight } from '../atoms/Logo'
import { Button } from '../custom'
import { NavItems } from '../items'
import { Cart } from '../items/Cart'
import { MenuHamburger } from '../items/MenuHamburger'

export const NavSection = () => {
  const { isAuth, isLoading } = useAuth()

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#121212]  flex justify-between items-center px-6 py-8 lg:pt-8 lg:px-28 xl:px-40 z-50 border border-[#434343] border-t-0 border-x-0">
        <MenuHamburger />
        <div className="flex justify-center items-center">
          <LogoLight />
        </div>
        <NavItems className="hidden lg:flex flex-col gap-8 md:flex-row" />
        <div className="flex items-center gap-10 xl:gap-16">
          {!isAuth && !isLoading && (
            <div className="hidden lg:block">
              <Button variant="base" text="SIGN IN" className="py-2" link={{ href: '/sign-in' }} />
            </div>
          )}
          <Cart />
        </div>
      </div>
      {/* <hr className="border border-[#434343] border-t-0 z-50 relative md:mx-6 lg:mx-28 lg:mt xl:mx-40" /> */}
    </div>
  )
}
