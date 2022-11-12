import { HttpStatusCodes } from '@/api-constants/status-codes'
import { IPayloadInput } from '@/api-interfaces/auth.interfaces'
import { TSignInDto, TSignUpDto, TSignUpInput } from '@/api-interfaces/user.interfaces'
import { ServiceResponse } from '@/api-interfaces/utils.interface'
import { UserRepository } from '@/api-repositories/user.repository'
import { IUser } from '@/shared/interfaces/user'
import { TMongoId } from '@/shared/interfaces/utils'
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
          HttpStatusCodes.BAD_REQUEST
        )
      }

      const hashedPassword = await SecurityService.hashPassword(user.password)

      const userToSave: TSignUpInput = {
        email: user.email,
        password: hashedPassword || '',
        firstName: user.firstName,
        lastName: user.lastName
      }

      const userSavedId = await userRepository.save(userToSave)

      const payload: IPayloadInput = {
        id: userSavedId
      }

      const token = SecurityService.createJWT(payload)

      return new ServiceResponse(token, 'OK', HttpStatusCodes.OK)
    } catch (error) {
      console.log(error)

      return new ServiceResponse(null, 'Error', HttpStatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  static async signIn(user: TSignInDto): Promise<ServiceResponse<TMongoId | null>> {
    const userRepository = new UserRepository()
    try {
      const userInDb = await userRepository.findOneByFilter<IUser>({ email: user.email })

      if (!userInDb) {
        return new ServiceResponse(null, 'Wrong Credentials', HttpStatusCodes.UNAUTHORIZED)
      }

      const passwordsMatch = await SecurityService.comparePasswords(
        user.password,
        userInDb.password
      )

      if (!passwordsMatch) {
        return new ServiceResponse(null, 'Wrong Credentials', HttpStatusCodes.UNAUTHORIZED)
      }

      return new ServiceResponse(userInDb._id, 'OK', HttpStatusCodes.OK)
    } catch (error) {
      console.log(error)
      return new ServiceResponse(
        null,
        'Internal Server Error',
        HttpStatusCodes.INTERNAL_SERVER_ERROR
      )
    }
  }
}
