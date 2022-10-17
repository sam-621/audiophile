import { HandlerResponse } from '@/api-interfaces/utils.interface'
import { UserService } from '@/api-services/user.service'
import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const id = session?.user.id
  console.log(id)

  const { data, message, status } = await UserService.getProfile(id!)
  return new HandlerResponse(data, message, status, res)
}

export default handler
