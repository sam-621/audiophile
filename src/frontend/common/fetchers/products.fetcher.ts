import { productService } from '@/front-services/products.service'
import { IProduct } from '@/shared/interfaces/product.interface'

export const getAllProducts = async (): Promise<IProduct[]> => {
  const { data } = await productService.getAll()
  console.log({
    data
  })

  return data || []
}
