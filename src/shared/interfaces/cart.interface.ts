import { IProduct } from './product.interface'

export interface ICart {
  amount: number
  products: TCartProduct[]
}

export type TCartProduct = Pick<
  IProduct,
  'slug' | 'image' | 'category' | 'description' | 'includes' | 'name' | 'price' | 'features'
>
