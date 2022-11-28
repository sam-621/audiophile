import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react'

import { IProduct } from '@/shared/interfaces/product'

import { ProductsContextSchema } from '../interfaces/contexts'
import { getNewProducts } from '../utils/products'

export const ProductsContext = createContext<ProductsContextSchema>({
  products: [],
  newProducts: []
})

export const ProductsProvider: FC<PropsWithChildren<Props>> = ({ products, children }) => {
  const newProducts = getNewProducts(products ?? [])

  const contextValue = useMemo(
    () => ({
      products: products ?? [],
      newProducts
    }),
    [products]
  )

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}

type Props = {
  products: IProduct[]
}

export const useProductsContext = () => useContext(ProductsContext)
