import { FC, FormEventHandler, ReactNode } from 'react'

export const Form: FC<Props> = ({ children, title, className, onSubmit }) => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-left text-3xl font-bold mb-8">{title}</h2>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

type Props = {
  children: ReactNode
  title: string
  onSubmit: FormEventHandler<HTMLFormElement>
  className?: string
}
