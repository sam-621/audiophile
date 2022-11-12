import { FC } from 'react'
import { GetStaticProps } from 'next'

import { ProductsProvider } from '@/front-contexts'
import { getAllProducts } from '@/front-fetchers'
import { HomeView } from '@/front-modules'
import { IProduct } from '@/shared/interfaces/product'

export const Home: FC<Props> = ({ products }) => {
  return (
    <ProductsProvider products={products}>
      <HomeView />
    </ProductsProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products
    }
  }
}

export default Home

type Props = {
  products: IProduct[]
}
