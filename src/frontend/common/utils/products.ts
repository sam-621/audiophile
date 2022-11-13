import { IProduct } from '@/shared/interfaces/product'

export const getNewProduct = (products: IProduct[]) => {
  return products?.find(product => Boolean(product.new))
}
