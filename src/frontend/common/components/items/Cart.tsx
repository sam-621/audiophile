import Image from 'next/image'

export const Cart = () => {
  return (
    <button className="relative bg-transparent">
      <Image src="/icons/icon-cart.svg" alt="Cart" width={23} height={20} />
      <span className="absolute -top-[15px] -right-[15px] text-white rounded-full px-2 py-[1px] bg-primary">
        3
      </span>
    </button>
  )
}
