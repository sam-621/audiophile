import { FC, ReactNode } from 'react'

export const AppLayout: FC<Props> = ({ children }) => {
  return <div className="my-8 mx-6">{children}</div>
}

type Props = {
  children: ReactNode
}
