import { THashMap } from '@/shared/interfaces/utils'
import { AxiosResponse } from 'axios'
import { Response } from '../utils.interface'

export type TRequestOptions = {
  endpoint: string
  apiDomain?: string
  headers?: THashMap
}

export class ServiceResponse<T> {
  data: T
  response: AxiosResponse<Response<T>>

  constructor(data: T, response: AxiosResponse) {
    this.data = data
    this.response = response
  }
}
