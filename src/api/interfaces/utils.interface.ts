import { WithId } from 'mongodb'

export type TCollection = 'users' | 'products'

export type TRepositoryResult<T> = WithId<T>
