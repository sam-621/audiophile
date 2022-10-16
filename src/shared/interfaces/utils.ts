import { ObjectId, WithId } from 'mongodb'

export type TMongoId = ObjectId

export type THashMap<T = string> = {
  [index: string]: T
}

export type TEntityWithId<T> = WithId<T>
