import { createContext, FC, PropsWithChildren } from 'react'

import { useQuery } from '@tanstack/react-query'

import { getAllProducts } from '../fetchers/products.fetcher'
import { ProductsContextSchema } from '../interfaces/contexts'

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
