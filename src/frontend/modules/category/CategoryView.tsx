import { useProductsContext } from '@/front-contexts'
import { FC } from 'react'

export const CategoryView: FC<Props> = ({ title }) => {
  const { products } = useProductsContext()
  console.log({
    title,
    products
  })

  return <h1>Category</h1>
}

type Props = {
  title: string
}
