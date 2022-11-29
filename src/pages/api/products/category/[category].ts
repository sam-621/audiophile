import { HttpStatusCodes } from '@/api-constants/status-codes'
import { ProductsByCategory } from '@/api-interfaces/products-interfaces'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { ProductService } from '@/api-services/products.service'
import { ProductCategory } from '@/shared/interfaces/product'
import { NextApiRequest, NextApiResponse } from 'next'

const categories: ProductCategory[] = [
  ProductCategory.EARPHONES,
  ProductCategory.HEADPHONES,
  ProductCategory.SPEAKERS
]

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category } = req.query as unknown as ProductsByCategory

  if (!categories.includes(category)) {
    return new HandlerResponse(null, 'NOT FOUND', HttpStatusCodes.NOT_FOUND, res)
  }

  const { data, message, status } = await ProductService.getProductsByCategory(category)
  return new HandlerResponse(data, message, status, res)
}

export default handler
