import { UserService } from '@/api-services/user.service'
import { TMongoId } from '@/shared/interfaces/utils'
import { JwtGuard } from 'api/guards/jwt.guard'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = (await JwtGuard(req, res)) as TMongoId

  const users = await UserService.getProfile(id)
  res.status(200).json(users)
}

export default handler
