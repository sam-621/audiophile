import { IProduct } from './product.interface'
import { IUser } from './user.interface'
import { TMongoId } from './utils'

export interface ICart {
  id: TMongoId
  owner: TCartOwner
  amount: number
  products: TCartProduct[]
}

export type TCartOwner = Pick<IUser, '_id' | 'name' | 'email'>

export type TCartProduct = Pick<
  IProduct,
  '_id' | 'slug' | 'image' | 'category' | 'description' | 'includes' | 'name' | 'price' | 'features'
>
