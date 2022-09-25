import { IProduct } from './product.interface'
import { IUser } from './user.interface'
import { TMongoId } from './utils'

export interface IOrder {
  _id: TMongoId
  owner: TOrderOwner
  amount: number
  created_at: Date
  updated_at: Date
  products: IProduct[]
}

export type TOrderOwner = Pick<IUser, 'name' | 'email' | '_id'>
