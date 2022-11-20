import Image from 'next/image'

export const MenuHamburger = () => {
  return (
    <div className="lg:hidden">
      <Image src="/icons/icon-hamburger.svg" alt="Menu" width={16} height={15} />
    </div>
  )
}
