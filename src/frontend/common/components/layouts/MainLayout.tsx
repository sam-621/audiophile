import { FC, ReactNode } from 'react'

export const MainLayout: FC<Props> = ({ children }) => {
  return <main className="mx-6 lg:mx-40 flex flex-col gap-32 mb-32">{children}</main>
}

type Props = {
  children: ReactNode
}
