import { HttpStatusCodes } from '@/api-constants/status-codes'
import { GuardResponse } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { SecurityService } from '@/api-services/security.service'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export const JwtGuard = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<GuardResponse<TMongoId>> => {
  const token = req.headers['authorization']

  if (!token) {
    return new GuardResponse(false, 'No Token Provided', HttpStatusCodes.BAD_REQUEST)
  }

  try {
    const decoded = SecurityService.verifyJWT(token)

    if (!decoded) {
      return new GuardResponse(false, 'Invalid Token', HttpStatusCodes.UNAUTHORIZED)
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findOneById<IUser>(decoded.id)

    if (!user) {
      return new GuardResponse(false, 'Invalid Token', HttpStatusCodes.UNAUTHORIZED)
    }

    return new GuardResponse(true, 'OK', HttpStatusCodes.OK, user._id)
  } catch (error) {
    console.log(error)

    return new GuardResponse(false, 'Error', HttpStatusCodes.INTERNAL_SERVER_ERROR)
  }
}
