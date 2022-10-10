import { HttpStatusCodes } from '@/api-constants/status-codes'
import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { AuthService } from '@/api-services/auth.service'
import { is404Endpoint } from '@/api-utils/request'
import { signInValidator } from '@/api-validations/auth.validation'
import { NextApiRequest, NextApiResponse } from 'next'

const signInHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (is404Endpoint(req, 'POST')) {
    return res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'NOT FOUND' })
  }

  const errors = signInValidator(req.body)

  if (Boolean(errors?.length)) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: errors })
  }

  const { data, message, status } = await AuthService.signIn(req.body)
  return new HandlerResponse(data, message, status, res)
}

export default signInHandler
