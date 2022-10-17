import { THttpMethod } from '@/api-interfaces/utils.interface'

export const is404Endpoint = (httpMethod: THttpMethod, reqMethod: string | undefined) =>
  httpMethod !== reqMethod
