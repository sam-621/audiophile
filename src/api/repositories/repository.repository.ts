import { getConnection } from '@/api-db/connection'
import { TCollection } from '@/api-interfaces/utils.interface'
import { TEntityWithId, TMongoId } from '@/shared/interfaces/utils'
import { Document, Filter, InsertOneResult, ModifyResult, ObjectId } from 'mongodb'

export class Repository {
  collection: TCollection

  constructor(collectionName: TCollection) {
    this.collection = collectionName
  }

  async getDbCollection() {
    const conn = await getConnection()
    const db = conn.db('audiophile')
    const collection = db.collection(this.collection)

    return collection
  }

  async findOneById<T = Document>(id: TMongoId): Promise<TEntityWithId<T>> {
    const collection = await this.getDbCollection()
    const result = await collection.findOne({ _id: new ObjectId(id) })

    return result as unknown as TEntityWithId<T>
  }

  async findOneByFilter<T = Document>(filter: Filter<T>): Promise<TEntityWithId<T>> {
    const collection = await this.getDbCollection()
    const result = await collection.findOne(filter)

    return result as unknown as TEntityWithId<T>
  }

  async find<T = Document>(): Promise<TEntityWithId<T>> {
    const collection = await this.getDbCollection()
    const result = await collection.find().toArray()

    return result as unknown as TEntityWithId<T>
  }

  async insert(input: Document): Promise<InsertOneResult<Document>> {
    const collection = await this.getDbCollection()
    return collection.insertOne(input)
  }

  async update(id: TMongoId, input: Document): Promise<ModifyResult<Document>> {
    const collection = await this.getDbCollection()
    return collection.findOneAndUpdate(id, input)
  }
}
