import { AuthService } from '@/api-services/auth.service'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await AuthService.signUp(req.body)
  res.status(200).json(token)
}

export default handler
