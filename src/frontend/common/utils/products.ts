import { IProduct } from '@/shared/interfaces/product'

export const getNewProduct = (products: IProduct[]) =>
  products.find(product => Boolean(product.new))
