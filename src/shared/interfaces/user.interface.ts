import { ICart } from './cart.interface'
import { IOrder } from './order.interface'
import { TMongoId } from './utils'

export interface IUser {
  _id: TMongoId
  name: string
  email: string
  password: string
  phone: string
  address: TAddress
  shopping_history: IOrder[]
  cart: ICart
}

export type TAddress = {
  street_1: string
  street_2?: string
  postal_code: string
  city: string
  country_code: string
}
