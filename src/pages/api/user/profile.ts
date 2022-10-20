import { HttpStatusCodes } from '@/api-constants/status-codes'
import { JwtGuard } from '@/api-guards/jwt.guard'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { UserService } from '@/api-services/user.service'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req })
  const isValidToken = await JwtGuard(token?.id)

  if (!isValidToken) {
    return new HandlerResponse(null, 'NO TOKEN PROVIDED', HttpStatusCodes.UNAUTHORIZED, res)
  }

  const { data, message, status } = await UserService.getProfile(token?.id!)
  return new HandlerResponse(data, message, status, res)
}

export default handler
