import { useToggle } from '@/front-hooks'
import Image from 'next/image'
import { Modal } from '../custom'

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
      <Modal isOpen={state} closeModal={toggle}>
        <Modal.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
          Payment successful
        </Modal.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an email with all of the
            details of your order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={toggle}
          >
            Got it, thanks!
          </button>
        </div>
      </Modal>
    </>
  )
}
