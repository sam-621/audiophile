import { getConnection } from '@/api-db/connection'
import { TMongoId } from '@/shared/interfaces/utils'
import { TCollection, TRepositoryResult } from 'api/interfaces/utils.interface'
import { Document, Filter, WithId } from 'mongodb'

export class Repository {
  collection: TCollection

  constructor(collectionName: TCollection) {
    this.collection = collectionName
  }

  protected async getDbCollection() {
    const conn = await getConnection()
    const db = conn.db('audiophile')
    const collection = db.collection(this.collection)

    return collection
  }

  protected async findOneById<T = Document>(id: TMongoId): Promise<TRepositoryResult<T>> {
    const collection = await this.getDbCollection()
    const result = collection.findOne({ _id: id })

    return result as unknown as WithId<T>
  }

  protected async findOneByFilter<T = Document>(filter: Filter<T>): Promise<TRepositoryResult<T>> {
    const collection = await this.getDbCollection()
    const result = collection.findOne(filter)

    return result as unknown as WithId<T>
  }

  protected async find<T = Document>(): Promise<TRepositoryResult<T>> {
    const collection = await this.getDbCollection()
    const result = collection.find()

    return result as unknown as WithId<T>
  }

  protected async insert(input: Document) {
    const collection = await this.getDbCollection()
    collection.insertOne(input)
  }

  protected async update(id: TMongoId, input: Document) {
    const collection = await this.getDbCollection()
    collection.findOneAndUpdate(id, input)
  }
}
