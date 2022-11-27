import { TCartProduct } from '@/shared/interfaces/cart'

export const getTotalCartPrice = (products: TCartProduct[]) => {
  const productsPrice: number[] = products.map(product => product.price)
  return productsPrice.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
}
