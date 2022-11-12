import { createContext, FC, PropsWithChildren, useMemo } from 'react'

import { IProduct } from '@/shared/interfaces/product'

import { useAllProducts } from '../hooks/petitions'
import { ProductsContextSchema } from '../interfaces/contexts'

export const ProductsContext = createContext<ProductsContextSchema>({
  products: []
})

export const ProductsProvider: FC<PropsWithChildren<Props>> = ({ products, children }) => {
  const { data } = useAllProducts({ initialData: products })

  const contextValue = useMemo(
    () => ({
      products: data || []
    }),
    [data]
  )

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}

type Props = {
  products: IProduct[]
}
