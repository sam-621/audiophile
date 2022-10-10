import { IProduct } from './product.interface'
import { IUser } from './user.interface'
import { TMongoId } from './utils'

export interface IOrder {
  owner: TOrderOwner
  amount: number
  created_at: Date
  updated_at: Date
  products: TProductOrder[]
}

export type TOrderOwner = Pick<IUser, 'firstName' | 'lastName' | 'email'> & {
  ownerId: TMongoId
}

export type TProductOrder = Pick<IProduct, 'name' | 'slug' | 'price' | 'description' | 'image'>
