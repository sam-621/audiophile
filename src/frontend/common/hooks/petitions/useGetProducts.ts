import { CACHE_KEYS } from '@/front-constants/queries-cache'
import { getAllProducts } from '@/front-fetchers/products.fetcher'
import { getNewProduct } from '@/front-utils/products'
import { useQuery } from '@tanstack/react-query'

export const useGetProducts = () => {
  const res = useQuery(CACHE_KEYS.ALL_PRODUCTS, getAllProducts)
  const newProduct = getNewProduct(res.data || [])

  return {
    newProduct,
    products: res.data,
    isLoading: res.isLoading
  }
}
