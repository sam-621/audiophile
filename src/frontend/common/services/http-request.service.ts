import axios, { AxiosResponse } from 'axios'

import { BASE_API_URL } from '@/front-constants'
import { TRequestOptions } from '@/front-interfaces'
import { THashMap } from '@/shared/interfaces/utils'

export default class HttpRequest {
  private apiDomain: string

  private endpoint: string

  private headers: THashMap

  constructor() {
    this.endpoint = ''
    this.apiDomain = BASE_API_URL || ''
    this.headers = {
      'Content-Type': 'application/json'
    }
  }

  protected configRequest(config: TRequestOptions) {
    this.endpoint = config.endpoint
    this.apiDomain = config.apiDomain || this.apiDomain
    this.headers = {
      ...this.headers,
      ...config.headers
    }
  }

  protected async get<T>(): Promise<AxiosResponse<T>> {
    return axios.get(this.urlBuilder(), { headers: this.headers })
  }

  protected async post<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.post(this.urlBuilder(), data, { headers: this.headers })
  }

  protected async put<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.put(this.urlBuilder(), data, { headers: this.headers })
  }

  protected async delete<T>(): Promise<AxiosResponse<T>> {
    return axios.delete(this.urlBuilder(), { headers: this.headers })
  }

  private urlBuilder(): string {
    return `${this.apiDomain}${this.endpoint}`
  }
}
