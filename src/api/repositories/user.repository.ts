import { TSignUpInput } from '@/api-interfaces/user.interfaces'
import { TMongoId } from '@/shared/interfaces/utils'
import { Repository } from './repository.repository'

export class UserRepository extends Repository {
  constructor() {
    super('users')
  }

  async save(user: TSignUpInput): Promise<TMongoId> {
    const response = await this.insert(user)

    return response.insertedId
  }
}
