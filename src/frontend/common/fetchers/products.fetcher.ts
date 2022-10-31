import { productService } from '@/front-services/products.service'
import { IProduct } from '@/shared/interfaces/product.interface'
import { TEntityWithId } from '@/shared/interfaces/utils'

export const getAllProducts = async (): Promise<TEntityWithId<IProduct>[]> => {
  const { data } = await productService.getAll()

  return data || []
}
