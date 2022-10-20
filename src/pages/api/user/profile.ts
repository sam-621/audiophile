import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { UserService } from '@/api-services/user.service'
import { jwtMiddleware } from 'api/middlewares/jwt.middleware'
import { NextApiRequest, NextApiResponse } from 'next'
import { JWT } from 'next-auth/jwt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = (await jwtMiddleware(req, res)) as JWT

  const { data, message, status } = await UserService.getProfile(token?.id!)
  return new HandlerResponse(data, message, status, res)
}

export default handler
