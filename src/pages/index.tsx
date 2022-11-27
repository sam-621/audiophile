import { FC } from 'react'
import { GetStaticProps } from 'next'

import { ProductsProvider } from '@/front-contexts'
import { HomeView } from '@/front-modules'
import { IProduct } from '@/shared/interfaces/product'
import { ProductRepository } from '@/api-repositories/products.repository'
import { NavSection } from '@/front-components'

export const Home: FC<Props> = ({ products }) => {
  return (
    <ProductsProvider products={products}>
      <NavSection />
      <HomeView />
    </ProductsProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const productRepository = new ProductRepository()

  const products = (await productRepository.find<IProduct>()).map(product => ({
    ...product,
    _id: product._id.toString()
  }))

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
