import { ProductCategory } from '@/shared/interfaces/product'
import { TMongoId } from '@/shared/interfaces/utils'

// Dto
export type ProductByIdParam = {
  id: TMongoId
}

export type ProductsByCategory = {
  category: ProductCategory
}
