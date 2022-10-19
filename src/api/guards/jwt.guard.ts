import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'

export const JwtGuard = async (id: TMongoId | undefined): Promise<boolean> => {
  try {
    if (!id) {
      return false
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findOneById<IUser>(id)

    if (!user) {
      return false
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
