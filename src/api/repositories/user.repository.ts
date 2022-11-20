import { TSaveUser, TSignUpInput } from '@/api-interfaces/user.interfaces'
import { TMongoId } from '@/shared/interfaces/utils'

import { Repository } from './repository.repository'

export class UserRepository extends Repository {
  constructor() {
    super('users')
  }

  async save(user: TSignUpInput): Promise<TMongoId> {
    const newUser: TSaveUser = {
      ...user,
      cart: { amount: 0, products: [] },
      address: null,
      phone: null
    }

    const response = await this.insert(newUser)

    return response.insertedId
  }
}
