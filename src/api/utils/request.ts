import { THttpMethod } from '@/api-interfaces/utils.interface'

export const is404Endpoint = (reqMethod: string, httpMethod: THttpMethod) =>
  reqMethod !== httpMethod
