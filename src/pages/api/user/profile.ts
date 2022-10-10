import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { UserService } from '@/api-services/user.service'
import { TMongoId } from '@/shared/interfaces/utils'
import { JwtGuard } from 'api/guards/jwt.guard'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = (await JwtGuard(req, res)) as TMongoId

  const { data, message, status } = await UserService.getProfile(id)
  return new HandlerResponse(data, message, status, res)
}

export default handler
