import { ChangeEvent, FC } from 'react'
import { TextInput } from './TextInput'

export const Input: FC<Props> = ({
  variant,
  value,
  label,
  type,
  className,
  error,
  placeholder,
  onChange
}) => {
  switch (variant) {
    case 'text':
      return (
        <TextInput
          type={type}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          className={className}
        />
      )
    default:
      return (
        <TextInput
          type={type}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          className={className}
        />
      )
  }
}

type Props = InputProps & {
  variant: 'text' | 'quantity'
}

export type InputProps = {
  type: 'text' | 'email' | 'password'
  label: string
  value: string
  error?: string
  placeholder?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
