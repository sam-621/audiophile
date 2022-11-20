import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react'

import { IProduct } from '@/shared/interfaces/product'

import { useAllProducts } from '../hooks/petitions'
import { ProductsContextSchema } from '../interfaces/contexts'
import { getNewProducts } from '../utils/products'

export const ProductsContext = createContext<ProductsContextSchema>({
  products: [],
  newProducts: []
})

export const ProductsProvider: FC<PropsWithChildren<Props>> = ({ products, children }) => {
  const { data } = useAllProducts({ initialData: products })
  const newProducts = getNewProducts(data || [])

  const contextValue = useMemo(
    () => ({
      products: data || [],
      newProducts
    }),
    [data]
  )

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}

type Props = {
  products: IProduct[]
}

export const useProductsContext = () => useContext(ProductsContext)
