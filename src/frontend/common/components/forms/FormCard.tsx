import { FC, ReactNode } from 'react'

export const FormCard: FC<Props> = ({ children }) => {
  return <div className="p-6">{children}</div>
}

type Props = {
  children: ReactNode
}
