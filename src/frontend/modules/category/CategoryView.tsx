import { About, Categories } from '@/front-components'
import { useProductsContext } from '@/front-contexts'
import { FC } from 'react'
import { CategoryProduct } from './components/CategoryProduct'
import { CategoryHeader } from './components/CategoryTitle'

export const CategoryView: FC<Props> = ({ title }) => {
  const { products } = useProductsContext()

  return (
    <>
      <CategoryHeader category={title} />
      <main className="mx-6 my-16 flex flex-col gap-32 xl:mx-40">
        {products.map((product, i) => (
          <CategoryProduct key={product._id as string} product={product} index={i} />
        ))}
        <Categories />
        <About />
      </main>
    </>
  )
}

type Props = {
  title: string
}
