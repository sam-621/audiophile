import { useContext } from 'react'

import { Nav } from '@/front-components'
import { ProductsContext } from '@/front-contexts'

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
