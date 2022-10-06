import { StatusCodes } from '@/api-constants/status-codes'
import { IPayload } from '@/api-interfaces/auth.interfaces'
import { TSignUpDto, TSignUpInput } from '@/api-interfaces/user.interfaces'
import { ServiceResponse } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user.interface'
import { SecurityService } from './security.service'

export class AuthService {
  static async signUp(user: TSignUpDto): Promise<ServiceResponse<string | null>> {
    const userRepository = new UserRepository()
    try {
      const userInDbWithSameEmail = await userRepository.findOneByFilter<IUser>({
        email: user.email
      })

      if (Boolean(userInDbWithSameEmail)) {
        return new ServiceResponse(
          null,
          'user with that email already exists',
          StatusCodes.BAD_REQUEST
        )
      }

      const hashedPassword = await SecurityService.hashPassword(user.password)

      const userToSave: TSignUpInput = {
        email: user.email,
        password: hashedPassword || '',
        name: user.name
      }

      const userSavedId = await userRepository.save(userToSave)

      const payload: IPayload = {
        id: userSavedId
      }

      const token = SecurityService.createJWT(payload)

      return new ServiceResponse(token, 'OK', StatusCodes.OK)
    } catch (error) {
      console.log(error)

      return new ServiceResponse(null, 'Error', StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
