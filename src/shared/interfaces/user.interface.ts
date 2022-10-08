import { ICart } from './cart.interface'
import { IOrder } from './order.interface'

export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string | null
  address: TAddress | null
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
