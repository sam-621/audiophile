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

  /**
   * Method which search by id in the collection given
   * @param id mongo id
   * @returns Document
   */
  async findOneById<T = Document>(id: TMongoId): Promise<TEntityWithId<T>> {
    const collection = await this.getDbCollection()
    const result = await collection.findOne({ _id: new ObjectId(id) })

    return result as unknown as TEntityWithId<T>
  }

  /**
   * Method which search by the condition given
   * @param filter Filter applied to the search
   * @returns Document
   */
  async findOneByFilter<T = Document>(filter: Filter<T>): Promise<TEntityWithId<T>> {
    const collection = await this.getDbCollection()
    const result = await collection.findOne(filter)

    return result as unknown as TEntityWithId<T>
  }

  /**
   * Method which returns all documents found in the collection given
   * @returns Array of documents
   */
  async find<T = Document>(): Promise<TEntityWithId<T>[]> {
    const collection = await this.getDbCollection()
    const result = await collection.find().toArray()

    return result as unknown as TEntityWithId<T>[]
  }

  /**
   * Method which insert a document into the collection given
   * @param input Document to insert
   * @returns Document inserted
   */
  async insert(input: Document): Promise<InsertOneResult<Document>> {
    const collection = await this.getDbCollection()
    return collection.insertOne(input)
  }

  /**
   * Method which update a document which match with the id given
   * @param id Document id to update
   * @param input Data to update
   * @returns Document updated
   */
  async update(id: TMongoId, input: Document): Promise<ModifyResult<Document>> {
    const collection = await this.getDbCollection()
    return collection.findOneAndUpdate(id, input)
  }
}
