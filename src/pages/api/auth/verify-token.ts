import { HttpStatusCodes } from '@/api-constants/status-codes'
import { JwtGuard } from '@/api-guards/jwt.guard'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { TMongoId } from '@/shared/interfaces/utils'
import { NextApiRequest, NextApiResponse } from 'next'

const verifyTokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = (await JwtGuard(req, res)) as TMongoId

  return new HandlerResponse(id, 'OK', HttpStatusCodes.OK, res)
}

export default verifyTokenHandler
