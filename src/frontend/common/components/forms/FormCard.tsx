import { FC, ReactNode } from 'react'

export const FormCard: FC<Props> = ({ children, title }) => {
  return (
    <div className="p-6">
      <h2 className="text-left text-3xl font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

type Props = {
  children: ReactNode
  title: string
}
