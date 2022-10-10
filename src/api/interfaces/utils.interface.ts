import { HttpStatusCodes } from '@/api-constants/status-codes'
import { WithId } from 'mongodb'
import { NextApiResponse } from 'next'

export type TCollection = 'users' | 'products'

export type TRepositoryResponse<T> = WithId<T>

export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type TBodyResponse = {
  message: string
  data: unknown
}

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

export class HandlerResponse<T> {
  data: T
  message: string
  status: HttpStatusCodes
  res: NextApiResponse

  constructor(
    data: T,
    message: string,
    status: HttpStatusCodes,
    res: NextApiResponse<TBodyResponse>
  ) {
    this.data = data
    this.message = message
    this.status = status
    this.res = res

    this.sendRes()
  }

  private async sendRes(): Promise<void> {
    return this.res.status(this.status).json({ message: this.message, data: this.data })
  }
}
