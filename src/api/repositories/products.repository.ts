import { Repository } from './repository.repository'

export class ProductRepository extends Repository {
  constructor() {
    super('products')
  }
}
