import { IProduct } from '@/shared/interfaces/product'

export const getNewProducts = (products: IProduct[]) => {
  return products?.filter(product => Boolean(product.new))
}
