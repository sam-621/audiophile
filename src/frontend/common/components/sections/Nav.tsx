import { LogoLight } from '../atoms/Logo'
import { Cart } from '../items/Cart'
import { MenuHamburger } from '../items/MenuHamburger'

export const Nav = () => {
  return (
    <nav className="bg-[#191919] flex justify-between px-6 py-8">
      <MenuHamburger />
      <div>
        <LogoLight />
      </div>
      <Cart />
    </nav>
  )
}
