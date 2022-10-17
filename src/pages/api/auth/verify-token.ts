import { HttpStatusCodes } from '@/api-constants/status-codes'
import { JwtGuard } from '@/api-guards/jwt.guard'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { NextApiRequest, NextApiResponse } from 'next'

const verifyTokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: id, message, status } = await JwtGuard(req, res)

  if (!id) {
    return res.status(status).json({
      message
    })
  }

  return new HandlerResponse(id, 'OK', HttpStatusCodes.OK, res)
}

export default verifyTokenHandler
