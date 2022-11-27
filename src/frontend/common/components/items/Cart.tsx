import { useToggle } from '@/front-hooks'
import Image from 'next/image'
import { Button, Modal } from '../custom'

export const Cart = () => {
  const { state, toggle } = useToggle()
  return (
    <>
      <button className="relative bg-transparent top-[3px]" onClick={toggle}>
        <Image src="/icons/icon-cart.svg" alt="Cart" width={23} height={20} />
        <span className="absolute -top-[15px] -right-[15px] text-white rounded-full px-2 py-[1px] bg-primary">
          3
        </span>
      </button>
      <Modal
        isOpen={state}
        closeModal={toggle}
        layoutClassNames="md:justify-end md:items-start md:mt-24 md:mr-6 lg:mr-28 xl:mr-40"
      >
        <div className="flex justify-between items-center mb-8">
          <Modal.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
            <span style={{ letterSpacing: 1 }}>CART</span> ({3})
          </Modal.Title>
          <button className="underline text-subtitle hover:text-primary transition-all">
            Remove all
          </button>
        </div>
        <div className="flex flex-col gap-6 max-h-[256px] overflow-scroll">
          <article className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src="/img/cart/image-xx99-mark-two-headphones.jpg"
                  alt="Two headphones"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold">XX99 MK II</h4>
                <span className="text-subtitle text-sm font-semibold">$ 2,999</span>
              </div>
            </div>
            <div className="bg-cards flex gap-1">
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                +
              </button>
              <span className="flex items-center font-semibold">1</span>
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                -
              </button>
            </div>
          </article>
          <article className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src="/img/cart/image-xx99-mark-two-headphones.jpg"
                  alt="Two headphones"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold">XX99 MK II</h4>
                <span className="text-subtitle text-sm font-semibold">$ 2,999</span>
              </div>
            </div>
            <div className="bg-cards flex gap-1">
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                +
              </button>
              <span className="flex items-center font-semibold">1</span>
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                -
              </button>
            </div>
          </article>
          <article className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <Image
                  src="/img/cart/image-xx99-mark-two-headphones.jpg"
                  alt="Two headphones"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold">XX99 MK II</h4>
                <span className="text-subtitle text-sm font-semibold">$ 2,999</span>
              </div>
            </div>
            <div className="bg-cards flex gap-1">
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                +
              </button>
              <span className="flex items-center font-semibold">1</span>
              <button className="px-5 py-2 text-subtitle hover:text-primary transition-all">
                -
              </button>
            </div>
          </article>
        </div>
        <div className="flex justify-between mb-6 mt-9">
          <span className="text-subtitle font-semibold">TOTAL</span>
          <span className="font-semibold">$5,396</span>
        </div>
        <div className="">
          <Button variant="base" text="CHECKOUT" className="w-full" />
        </div>
      </Modal>
    </>
  )
}
