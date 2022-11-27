import { useAuth, useToggle } from '@/front-hooks'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { LogoLight } from '../atoms/Logo'
import { Button } from '../custom'
import { NavItems } from '../items'
import { Cart } from '../items/Cart'
import { Categories } from './Categories'

export const NavSection = () => {
  const { isAuth, logOut, isLoginOut } = useAuth()
  const { toggle, state } = useToggle()

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="bg-[#121212]  flex justify-between items-center px-6 py-8 lg:pt-8 lg:px-28 xl:px-40 z-40 border border-[#434343] border-t-0 border-x-0">
          <div className="lg:hidden">
            <button onClick={toggle}>
              <Image src="/icons/icon-hamburger.svg" alt="Menu" width={16} height={15} />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <LogoLight />
          </div>
          <NavItems className="hidden lg:flex flex-col gap-8 md:flex-row" />
          <div className="flex items-center gap-10 xl:gap-16">
            {!isAuth && (
              <div className="hidden lg:block">
                <Button
                  variant="base"
                  text="SIGN IN"
                  className="py-2"
                  link={{ href: '/sign-in' }}
                />
              </div>
            )}
            <Cart />
          </div>
        </div>
      </div>
      <Transition
        enter="ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        show={state}
        className="fixed bg-white left-0 w-full overflow-scroll menu-height z-40"
      >
        <div className="mx-6 mb-10">
          <Categories />
          <div className="flex justify-center mt-8">
            {isAuth ? (
              <Button
                disabled={isLoginOut}
                variant="base"
                text="LOG OUT"
                className={`${isLoginOut ? 'bg-[#4E4E4E]' : 'bg-black hover:bg-[#4E4E4E]'}`}
                onClick={logOut}
              />
            ) : (
              <Button variant="base" text="SIGN IN" link={{ href: '/sign-in' }} />
            )}
          </div>
        </div>
      </Transition>
    </>
  )
}
