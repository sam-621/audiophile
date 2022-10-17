import { ChangeEvent, FC } from 'react'

export const TextInput: FC<Props> = ({
  type,
  label,
  value,
  error,
  placeholder,
  className,
  onChange
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor="html" className={`text-black text-xs font-bold ${error && 'text-error'}`}>
          {label}
        </label>
        {error && <span className="text-error text-xs">{error}</span>}
      </div>
      <input
        className={`caret-primary outline-none rounded-lg border-2 ${
          !error && 'border-[#C4C4C4]'
        } focus:border-primary px-6 py-4 text-black text-sm transition ${
          error && 'border-error focus:border-error caret-error'
        } ${className}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

type Props = {
  type: 'text' | 'email' | 'password'
  label: string
  value: string
  error?: string
  placeholder?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
