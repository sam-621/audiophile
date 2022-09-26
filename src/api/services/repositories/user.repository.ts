import { UserModel } from '@/models/user.model'
import { TMongoId } from '@/shared/interfaces/utils'

export class UserRepository {
  static async getById(id: TMongoId) {
    try {
      const user = await UserModel.findById(id)

      return user
    } catch (error) {
      console.log(error)
    }
  }

  static async getByEmail(email: string) {
    try {
      const user = await UserModel.findOne({ email: email })

      return user
    } catch (error) {
      console.log(error)
    }
  }
}
