import { Dialog } from '@headlessui/react'
import { Props, ReactTag } from '@headlessui/react/dist/types'
import { FC, ReactNode } from 'react'

export const ModalTitle: FC<ComponentProps> = ({ children, ...others }) => {
  return <Dialog.Title {...others}>{children}</Dialog.Title>
}

type ComponentProps = {
  children: ReactNode
} & Props<ReactTag>
