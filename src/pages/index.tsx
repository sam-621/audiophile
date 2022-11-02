import { getAllProducts } from '@/front-fetchers/products.fetcher'
import { HomeView } from '@/front-modules/Home/HomeView'
import { IProduct } from '@/shared/interfaces/product.interface'
import { GetStaticProps } from 'next'
import { FC } from 'react'

export const Home: FC<Props> = ({ products }) => {
  console.log({
    products_1: products
  })

  return <HomeView />
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
