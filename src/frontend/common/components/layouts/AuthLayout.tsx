import { FC, ReactNode } from 'react'

export const AuthLayout: FC<Props> = ({ children }) => {
  return <div className="py-8 px-6">{children}</div>
}

type Props = {
  children: ReactNode
}
