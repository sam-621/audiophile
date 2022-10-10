import { TMongoId } from '@/shared/interfaces/utils'

export interface IPayloadInput {
  id: TMongoId
}

export type TJwtPayloadResponse = IPayloadInput & {
  iat: number
  exp: number
}
