import { ICart } from './cart'
import { TMongoId } from './utils'

export interface IUser {
  _id: TMongoId
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string | null
  address: TAddress | null
  cart: ICart
}

export type TAddress = {
  street_1: string
  street_2?: string
  postal_code: string
  city: string
  country_code: string
}
