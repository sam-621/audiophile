import { UserService } from '@/api-services/user.service'
import { JwtGuard } from 'api/guards/jwt.guard'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jwtGuardRes = await JwtGuard(req, res)

  if (!jwtGuardRes.success) {
    return res.status(jwtGuardRes.status).json({ message: jwtGuardRes.message })
  }

  const id = jwtGuardRes.data!

  const users = await UserService.getProfile(id)
  res.status(200).json(users)
}

export default handler
