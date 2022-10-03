import clientPromise from '@/api-db/connection'
// import { UserRepository } from '@/api-services/repositories/user.repository'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise
  const db = client.db('audiophile')
  const users = await db.collection('users').find({}).toArray()
  console.log({
    users
  })

  console.log('hi')
  res.status(200).json(users)
}

export default handler
