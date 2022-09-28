import mongoose from 'mongoose'

const uri = process.env.MONGO_DB_URI

export const connectDB = async () => {
  try {
    mongoose.connect(uri || '')
  } catch (error) {
    console.log(error)
  }
}

export const dropDb = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}
