import { useProductsContext } from '@/front-contexts'
import { FC } from 'react'
import { CategoryTitle } from './components/CategoryTitle'

export const CategoryView: FC<Props> = ({ title }) => {
  const { products } = useProductsContext()
  console.log({
    title,
    products
  })

  return (
    <>
      <CategoryTitle category={title} />
    </>
  )
}

type Props = {
  title: string
}
