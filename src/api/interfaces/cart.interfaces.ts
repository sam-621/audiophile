import { IProduct } from '@/shared/interfaces/product'
import { JWT } from 'next-auth/jwt'

// Dto
export type AddToCartDto = {
  products: IProduct[]
}

// Inputs
export type AddToCartInput = AddToCartDto & JWT
