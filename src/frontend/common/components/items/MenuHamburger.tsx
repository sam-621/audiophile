import { useToggle } from 'frontend/common/hooks/useToggle'
import Image from 'next/image'

export const MenuHamburger = () => {
  const { toggle } = useToggle()
  return (
    <>
      <div className="lg:hidden">
        <button onClick={toggle}>
          <Image src="/icons/icon-hamburger.svg" alt="Menu" width={16} height={15} />
        </button>
      </div>
    </>
  )
}
