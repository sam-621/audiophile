import { MongoClient } from 'mongodb'

export const getConnection = async () => {
  if (!process.env.MONGO_DB_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
  }

  const uri = process.env.MONGO_DB_URI

  const client = new MongoClient(uri)
  const connection = await client.connect()

  return connection
}
