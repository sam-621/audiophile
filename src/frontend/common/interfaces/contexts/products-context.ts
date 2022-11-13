import { IProduct } from '@/shared/interfaces/product'

export interface ProductsContextSchema {
  products: IProduct[]
  newProduct: IProduct | null
}
