import { FC } from 'react'

import { UseFormRegisterReturn } from 'react-hook-form'

import { TInputTypes } from '@/front-interfaces'

export const Input: FC<Props> = ({ type, label, error, placeholder, className, register }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor="html" className={`text-black text-xs font-bold ${error && 'text-error'}`}>
          {label}
        </label>
        {error && <span className="text-error text-xs">{error}</span>}
      </div>
      <input
        {...register}
        className={`caret-primary outline-none rounded-lg border-2 ${
          !error && 'border-[#C4C4C4]'
        } focus:border-primary px-6 py-4 text-black text-sm transition ${
          error && 'border-error focus:border-error caret-error'
        } ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

type Props = {
  type: TInputTypes
  label: string
  error?: string
  placeholder?: string
  className?: string
  register: UseFormRegisterReturn<string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}
