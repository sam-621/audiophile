import { Repository } from './repository.repository'

export class UserRepository extends Repository {
  constructor() {
    super('users')
  }
}
