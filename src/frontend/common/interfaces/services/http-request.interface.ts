import { THashMap } from '@/shared/interfaces/utils'
import { AxiosResponse } from 'axios'
import { Response } from '../utils.interface'

export type TRequestOptions = {
  endpoint: string
  apiDomain?: string
  headers?: THashMap
}

export class ServiceResponse<T> {
  data: T | null
  response: AxiosResponse<Response<T | unknown>> | null

  constructor(data: T | null, response: AxiosResponse | null) {
    this.data = data
    this.response = response
  }
}
