import { ICart } from './cart.interface'
import { IOrder } from './order.interface'
import { TMongoId } from './utils'

export interface IUser {
  _id: TMongoId
  name: string
  email: string
  password: string
  phone: string
  address: string
  postal_code: string
  city: string
  country: string
  shopping_history: IOrder[]
  cart: ICart[]
}
