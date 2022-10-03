import { MongoClient } from 'mongodb'

if (!process.env.MONGO_DB_URI) {
  throw new Error('Invalid environment variable: "MONGO_DB_URI"')
}

const uri = process.env.MONGO_DB_URI
const options = {}

if (!process.env.MONGO_DB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const client = new MongoClient(uri, options)
const clientPromise = client.connect()

export default clientPromise
