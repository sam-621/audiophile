import { IProduct } from '@/shared/interfaces/product.interface'

export const getNewProduct = (products: IProduct[]) =>
  products.find((product) => Boolean(product.new))
