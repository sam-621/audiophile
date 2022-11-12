import { IProduct } from '@/shared/interfaces/product'

import { productService } from '../services/products.service'

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data } = await productService.getAll()
  console.log({
    data
  })

  return data || []
}
