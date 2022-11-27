import { HttpStatusCodes } from '@/api-constants/status-codes'
import { AddToCartDto } from '@/api-interfaces/cart.interfaces'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { jwtMiddleware } from '@/api-middlewares/jwt.middleware'
import { CartService } from '@/api-services/cart.service'
import { is404Endpoint } from '@/api-utils/request'
import { addToCartValidations } from '@/api-validations/cart.validation'
import { NextApiRequest, NextApiResponse } from 'next'
import { JWT } from 'next-auth/jwt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (is404Endpoint('PUT', req.method)) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'NOT FOUND' })
  }

  const token = (await jwtMiddleware(req, res)) as JWT

  const addToCartDto = req.body as AddToCartDto

  const errors = addToCartValidations(addToCartDto)

  if (Boolean(errors?.length)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: errors })
  }

  const { data, message, status } = await CartService.add({
    ...token,
    products: addToCartDto.products
  })
  return new HandlerResponse(data, message, status, res)
}

export default handler
