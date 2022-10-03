import { ServiceResult } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user.interface'
import { TMongoId } from '@/shared/interfaces/utils'

export class UserService {
  static async getProfile(id: TMongoId): Promise<ServiceResult<IUser>> {
    const userRepository = new UserRepository()
    const userProfile = await userRepository.findOneById<IUser>(id)

    return new ServiceResult(userProfile, 'OK', 200)
  }
}