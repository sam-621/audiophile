import { ObjectId } from 'mongodb'

export type TMongoId = ObjectId

export type THashMap<T = string> = {
  [index: string]: T
}
