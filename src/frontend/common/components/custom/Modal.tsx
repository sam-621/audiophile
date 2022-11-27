import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, PropsWithChildren } from 'react'

export const Modal: FC<PropsWithChildren<Props>> = ({ isOpen, children, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {children}
      </Dialog>
    </Transition>
  )
}

type Props = {
  isOpen: boolean
  closeModal: () => void
}
