import { ProductByIdParam } from '@/api-interfaces/products-interfaces'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { ProductService } from '@/api-services/products.service'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as unknown as ProductByIdParam
  const { data, message, status } = await ProductService.getProductById(id)
  return new HandlerResponse(data, message, status, res)
}

export default handler
