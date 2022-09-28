import { connectDB } from '@/api-db/connection'
import { UserModel } from '@/api-models/user.model'
import { TMongoId } from '@/shared/interfaces/utils'

export class UserRepository {
  async getById(id: TMongoId | string) {
    try {
      const user = await UserModel.findById(id)
      console.log({
        user
      })

      return user
    } catch (error) {
      console.log(error)
    }
  }

  async getByEmail(email: string) {
    try {
      const user = await UserModel.findOne({ email: email })

      return user
    } catch (error) {
      console.log(error)
    }
  }
}
