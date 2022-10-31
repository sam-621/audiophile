import { HomeView } from '@/front-modules/Home/HomeView'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from 'frontend/common/fetchers/products.fetcher'

export const Home = () => {
  const { data, error } = useQuery(['hi'], getAllProducts, { retry: false })
  const _e = error as any
  console.log({
    data,
    error: _e?.message
  })

  return <HomeView />
}

export default Home
