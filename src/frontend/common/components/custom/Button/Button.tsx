import { FC } from 'react'
import { BaseButton } from './BaseButton'
import { OutlinedButton } from './OutlinedButton'
import { TextButton } from './TextButton'

export const Button: FC<Props> = ({ variant, text, link, className, disabled, onClick }) => {
  switch (variant) {
    case 'base':
      return (
        <BaseButton
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs ${className}`}
          disabled={disabled}
        />
      )
    case 'outlined':
      return (
        <OutlinedButton
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs ${className}`}
        />
      )
    case 'text':
      return (
        <TextButton text={text} link={link} onClick={onClick} className={`text-xs ${className}`} />
      )
    default:
      return (
        <BaseButton
          text={text}
          link={link}
          onClick={onClick}
          className={`py-4 px-7 text-xs ${className}`}
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
}
