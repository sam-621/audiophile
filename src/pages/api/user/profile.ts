import { connectDB, dropDb } from '@/api-db/connection'
import { UserRepository } from '@/api-services/repositories/user.repository'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectDB()
  const userRepository = new UserRepository()
  const users = await userRepository.getById('63328d813abaf158bdd03558')
  dropDb()
  console.log('hi')
  res.status(200).json(users)
}

export default handler
