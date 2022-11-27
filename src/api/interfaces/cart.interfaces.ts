import { IProduct } from '@/shared/interfaces/product'
import { TMongoId } from '@/shared/interfaces/utils'

// Dto
export type AddToCartDto = {
  products: IProduct[]
  userId: TMongoId
}
