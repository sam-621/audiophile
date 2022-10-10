import { TMongoId } from '@/shared/interfaces/utils'
import { JwtGuard } from 'api/guards/jwt.guard'
import { NextApiRequest, NextApiResponse } from 'next'

const verifyTokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = (await JwtGuard(req, res)) as TMongoId

  res.status(200).json(id)
}

export default verifyTokenHandler
