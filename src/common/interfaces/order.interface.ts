import { IProduct } from './product.interface'
import { IUser } from './user.interface'

export interface IOrder {
  _id: string
  owner: TOrderOwner
  amount: number
  created_at: Date
  updated_at: Date
  products: TProductOrder[]
}

export type TOrderOwner = Pick<IUser, 'name' | 'email'> & {
  ownerId: string
}

export type TProductOrder = Pick<
  IProduct,
  '_id' | 'name' | 'slug' | 'price' | 'description' | 'image'
>
