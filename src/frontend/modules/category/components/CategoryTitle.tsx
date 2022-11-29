import { FC } from 'react'

export const CategoryTitle: FC<Props> = ({ category }) => {
  return (
    <header className="bg-[#121212] py-8">
      <h1 className="text-white text-xl text-center font-semibold" style={{ letterSpacing: 2 }}>
        {category.toUpperCase()}
      </h1>
    </header>
  )
}

type Props = {
  category: string
}
