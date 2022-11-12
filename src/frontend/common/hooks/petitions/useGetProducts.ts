import { useQuery } from '@tanstack/react-query'

import { CACHE_KEYS } from '@/front-constants'
import { getAllProducts } from '@/front-fetchers'
import { getNewProduct } from '@/front-utils'

export const useGetProducts = () => {
  const res = useQuery(CACHE_KEYS.ALL_PRODUCTS, getAllProducts)
  const newProduct = getNewProduct(res.data || [])

  return {
    newProduct,
    products: res.data,
    isLoading: res.isLoading
  }
}
