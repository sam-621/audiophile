import { WithId } from 'mongodb'

export type TCollection = 'users' | 'products'

export type TRepositoryResult<T> = WithId<T>

export class ServiceResult<T> {
  data: TRepositoryResult<T>
  message: string
  status: number

  constructor(data: TRepositoryResult<T>, message: string, status: number) {
    this.data = data
    this.message = message
    this.status = status
  }
}
