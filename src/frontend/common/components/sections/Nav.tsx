import Image from 'next/image'
import { LogoLight } from '../atoms/Logo'

export const Nav = () => {
  return (
    <nav className="bg-[#191919] flex justify-between px-6 py-8">
      <div>
        <Image src="/icons/icon-hamburger.svg" alt="Menu" width={16} height={15} />
      </div>
      <div>
        <LogoLight />
      </div>
      <div>
        <Image src="/icons/icon-cart.svg" alt="Cart" width={23} height={20} />
        <span className="absolute text-white top-[18px] right-[9px] rounded-full px-2 py-[1px] bg-primary">
          3
        </span>
      </div>
    </nav>
  )
}
