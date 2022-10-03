import { UserService } from '@/api-services/user.service'
import { TMongoId } from '@/shared/interfaces/utils'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.headers.id as unknown as TMongoId

  const users = await UserService.getProfile(id)
  res.status(200).json(users)
}

export default handler
