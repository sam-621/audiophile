import { getAllProducts } from '@/front-fetchers/products.fetcher'
import { ProductsContextSchema } from '@/front-interfaces/contexts/products-context.interface'
import { IProduct } from '@/shared/interfaces/product.interface'
import { useQuery } from '@tanstack/react-query'
import { createContext, FC, PropsWithChildren } from 'react'

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
