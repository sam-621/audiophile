import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'

export const JwtGuard = async (id: TMongoId): Promise<TMongoId | null> => {
  try {
    if (!id) {
      return null
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findOneById<IUser>(id)

    if (!user) {
      return null
    }

    return user._id
  } catch (error) {
    console.log(error)
    return null
  }
}
