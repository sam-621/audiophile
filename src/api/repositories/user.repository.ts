import { TSignUpInput } from '@/api-interfaces/user.interfaces'
import { ObjectId } from 'mongodb'
import { Repository } from './repository.repository'

export class UserRepository extends Repository {
  constructor() {
    super('users')
  }

  async save(user: TSignUpInput): Promise<ObjectId> {
    const response = await this.insert(user)

    return response.insertedId
  }
}
