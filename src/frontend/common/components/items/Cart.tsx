import Image from 'next/image'

export const Cart = () => {
  return (
    <div>
      <Image src="/icons/icon-cart.svg" alt="Cart" width={23} height={20} />
      <span className="absolute text-white top-[18px] right-[9px] rounded-full px-2 py-[1px] bg-primary">
        3
      </span>
    </div>
  )
}
