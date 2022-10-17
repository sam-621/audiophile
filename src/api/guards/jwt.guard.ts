import { HttpStatusCodes } from '@/api-constants/status-codes'
import { GuardResponse } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth]'

export const JwtGuard = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<GuardResponse<TMongoId | null>> => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions)
    const id = session?.user.id

    if (!id) {
      return new GuardResponse(null, 'No user Id provided', HttpStatusCodes.UNAUTHORIZED)
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findOneById<IUser>(id)

    if (!user) {
      return new GuardResponse(null, 'Invalid user Id', HttpStatusCodes.UNAUTHORIZED)
    }

    return new GuardResponse(user._id, 'Ok', HttpStatusCodes.OK)
  } catch (error) {
    console.log(error)
    return new GuardResponse(null, 'Internal server error', HttpStatusCodes.INTERNAL_SERVER_ERROR)
  }
}
