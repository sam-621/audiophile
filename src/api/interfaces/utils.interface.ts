import { WithId } from 'mongodb'

export type TCollection = 'users' | 'products'

export type TRepositoryResponse<T> = WithId<T>

export class ServiceResponse<T> {
  data: T
  message: string
  status: number

  constructor(data: T, message: string, status: number) {
    this.data = data
    this.message = message
    this.status = status
  }
}

export class GuardResponse<T = unknown> {
  data?: T
  success: boolean
  message: string
  status: number

  constructor(success: boolean, message: string, status: number, data?: T) {
    this.success = success
    this.message = message
    this.status = status
    this.data = data
  }
}

export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
