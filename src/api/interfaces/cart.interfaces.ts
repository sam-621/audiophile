import { TCartProduct } from '@/shared/interfaces/cart'
import { JWT } from 'next-auth/jwt'

// Dto
export type AddToCartDto = {
  products: TCartProduct[]
}
export type RemoveFromCartDto = {
  products: TCartProduct[]
}

// Inputs
export type AddToCartInput = AddToCartDto & JWT
export type RemoveFromCartInput = RemoveFromCartDto & JWT
