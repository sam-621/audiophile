import { LogoLight } from '../atoms/Logo'
import { Cart } from '../items/Cart'
import { MenuHamburger } from '../items/MenuHamburger'

export const Nav = () => {
  return (
    <nav className="bg-[#121212] relative flex justify-between items-center px-6 py-8 lg:py-0 lg:pt-8 lg:px-28 xl:px-40 z-50">
      <MenuHamburger />
      <div className="flex justify-center items-center">
        <LogoLight />
      </div>
      <Cart />
    </nav>
  )
}
