import { productService } from '@/front-services/products.service'

export const getAllProducts = async () => {
  const { data } = await productService.getAll()

  return data
}
