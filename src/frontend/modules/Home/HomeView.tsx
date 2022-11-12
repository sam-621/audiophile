import { Nav } from '@/front-components/sections/Nav'
import { ProductsContext } from '@/front-contexts/products.context'
import { useContext } from 'react'
import { HomeHeader } from './components/HomeHeader'

export const HomeView = () => {
  const { products } = useContext(ProductsContext)
  console.log({
    products
  })

  return (
    <>
      <Nav />
      <HomeHeader />
    </>
  )
}
