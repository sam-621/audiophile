import { ProductsProvider } from '@/front-contexts/products.context'
import { getAllProducts } from '@/front-fetchers/products.fetcher'
import { HomeView } from '@/front-modules/Home/HomeView'
import { IProduct } from '@/shared/interfaces/product.interface'
import { GetStaticProps } from 'next'
import { FC } from 'react'

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
