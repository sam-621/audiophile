import { IProduct, ProductCategory } from '@/shared/interfaces/product'
import { THashMap } from '@/shared/interfaces/utils'

const PRODUCT_CATEGORIES: THashMap = {
  [ProductCategory.EARPHONES]: 'EARPHONES',
  [ProductCategory.HEADPHONES]: 'HEADPHONES',
  [ProductCategory.SPEAKERS]: 'SPEAKERS'
}

export const getNewProducts = (products: IProduct[]) => {
  return products?.filter(product => Boolean(product.new))
}

export const getProductCategoryName = (category: ProductCategory) => {
  return PRODUCT_CATEGORIES[category] ?? ''
}
