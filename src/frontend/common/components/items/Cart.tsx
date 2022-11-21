import { useAuth } from '@/front-hooks'
import Image from 'next/image'
import { Button } from '../custom'

export const Cart = () => {
  const { isAuth, isLoading } = useAuth()

  return (
    <div className="flex items-center gap-16">
      {!isAuth && !isLoading && (
        <div>
          <Button variant="base" text="SIGN IN" className="py-2" link={{ href: '/sign-in' }} />
        </div>
      )}
      <button className="relative bg-transparent top-[3px]">
        <Image src="/icons/icon-cart.svg" alt="Cart" width={23} height={20} />
        <span className="absolute -top-[15px] -right-[15px] text-white rounded-full px-2 py-[1px] bg-primary">
          3
        </span>
      </button>
    </div>
  )
}
