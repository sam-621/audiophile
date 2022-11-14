import { FC, ReactNode } from 'react'

export const MainLayout: FC<Props> = ({ children }) => {
  return <main className="mx-6 lg:mx-40">{children}</main>
}

type Props = {
  children: ReactNode
}
