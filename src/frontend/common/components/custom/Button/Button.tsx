import { FC } from 'react'

import { BaseButton } from './BaseButton'
import { OutlinedButton } from './OutlinedButton'
import { TextButton } from './TextButton'

export const Button: FC<Props> = ({
  variant,
  text,
  link,
  className,
  disabled,
  type = 'button',
  onClick
}) => {
  switch (variant) {
    case 'base':
      return (
        <BaseButton
          type={type}
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs font-semibold ${className}`}
          disabled={disabled}
        />
      )
    case 'outlined':
      return (
        <OutlinedButton
          type={type}
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs font-semibold ${className}`}
        />
      )
    case 'text':
      return (
        <TextButton
          type={type}
          text={text}
          link={link}
          onClick={onClick}
          className={`text-xs font-semibold ${className}`}
        />
      )
    default:
      return (
        <BaseButton
          type={type}
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs font-semibold ${className}`}
        />
      )
  }
}

type Props = TButtonProps & {
  variant: 'base' | 'outlined' | 'text'
}

export type TButtonProps = {
  text: string
  onClick?: () => void
  link?: {
    href: string
  }
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
