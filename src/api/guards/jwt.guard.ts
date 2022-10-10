import { HttpStatusCodes } from '@/api-constants/status-codes'
import { UserRepository } from '@/api-repositories/user.repository'
import { SecurityService } from '@/api-services/security.service'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export const JwtGuard = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<TMongoId | void> => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: 'No Token Provided' })
  }

  try {
    const decoded = SecurityService.verifyJWT(token)

    if (!decoded) {
      return res.status(HttpStatusCodes.UNAUTHORIZED).json({ message: 'Invalid Token' })
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findOneById<IUser>(decoded.id)

    if (!user) {
      return res.status(HttpStatusCodes.UNAUTHORIZED).json({ message: 'Invalid Token' })
    }

    return user._id
  } catch (error) {
    console.log(error)

    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error' })
  }
}
