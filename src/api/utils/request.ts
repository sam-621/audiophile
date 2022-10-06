import { THttpMethod } from '@/api-interfaces/utils.interface'
import { NextApiRequest } from 'next'

export const is404Endpoint = (req: NextApiRequest, httpMethod: THttpMethod) =>
  req.method !== httpMethod
