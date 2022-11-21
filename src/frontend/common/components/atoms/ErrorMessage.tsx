import { FC } from 'react'

export const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-error">{error}</span>
    </div>
  )
}

type Props = {
  error: string
}
