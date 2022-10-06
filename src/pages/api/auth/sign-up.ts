import { StatusCodes } from '@/api-constants/status-codes'
import { AuthService } from '@/api-services/auth.service'
import { is404Endpoint } from '@/api-utils/request'
import { signUpValidator } from '@/api-validations/auth.validation'
import { NextApiRequest, NextApiResponse } from 'next'

const signUpHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (is404Endpoint(req, 'POST')) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'NOT FOUND' })
  }

  const errors = signUpValidator(req.body)

  if (Boolean(errors?.length)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: errors })
  }

  const token = await AuthService.signUp(req.body)
  res.status(StatusCodes.OK).json(token)
}

export default signUpHandler
