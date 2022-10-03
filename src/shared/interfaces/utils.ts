import { Types } from 'mongoose'

export type TMongoId = Types.ObjectId

export type THashMap<T = string> = {
  [index: string]: T
}
