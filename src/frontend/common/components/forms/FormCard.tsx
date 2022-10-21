import { FC, ReactNode } from 'react'

export const FormCard: FC<Props> = ({ children, title, className }) => {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-left text-3xl font-bold mb-8">{title}</h2>
      <div className={className}>{children}</div>
    </div>
  )
}

type Props = {
  children: ReactNode
  title: string
  className?: string
}
