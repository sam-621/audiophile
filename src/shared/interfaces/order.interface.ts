import { IProduct } from './product.interface'
import { IUser } from './user.interface'
import { TMongoId } from './utils'

export interface IOrder {
  _id: TMongoId
  owner: TOrderOwner
  amount: number
  created_at: Date
  updated_at: Date
  products: TProductOrder[]
}

export type TOrderOwner = Pick<IUser, 'name' | 'email'> & {
  ownerId: TMongoId
}

export type TProductOrder = Pick<
  IProduct,
  '_id' | 'name' | 'slug' | 'price' | 'description' | 'image'
>
