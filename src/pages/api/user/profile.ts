// import clientPromise from '@/api-db/connection'
// import { UserRepository } from '@/api-services/repositories/user.repository'
import { getConnection } from '@/api-db/connection'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const connection = await getConnection()
  const db = connection.db('audiophile')
  const users = await db.collection('users').find({}).toArray()
  console.log({
    users
  })

  console.log('hi')
  res.status(200).json(users)
}

export default handler
