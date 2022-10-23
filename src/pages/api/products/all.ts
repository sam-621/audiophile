import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { ProductService } from '@/api-services/products.service'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const { data, message, status } = await ProductService.getAllProducts()
  return new HandlerResponse(data, message, status, res)
}

export default handler
