import { createContext, FC, PropsWithChildren } from 'react'

import { useQuery } from '@tanstack/react-query'

import { IProduct } from '@/shared/interfaces/product'

import { ProductsContextSchema } from '../interfaces/contexts'
import { getAllProducts } from '../services/products'

export const ProductsContext = createContext<ProductsContextSchema>({
  products: []
})

export const ProductsProvider: FC<PropsWithChildren<Props>> = ({ products, children }) => {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    initialData: products
  })

  return (
    <ProductsContext.Provider value={{ products: result.data }}>
      {children}
    </ProductsContext.Provider>
  )
}

type Props = {
  products: IProduct[]
}
