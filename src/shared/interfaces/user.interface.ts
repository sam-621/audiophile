import { ICart } from './cart.interface'
import { IOrder } from './order.interface'

export interface IUser {
  name: string
  email: string
  password: string
  phone?: string
  address?: TAddress
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
