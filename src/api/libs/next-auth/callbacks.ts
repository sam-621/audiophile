import { JwtGuard } from '@/api-guards/jwt.guard'
import { TMongoId } from '@/shared/interfaces/utils'
import { TJwtCb, TSessionCb } from './interfaces/callbacks.interface'

export const sessionCb: TSessionCb = ({ session, token }) => {
  session.user.id = token.id

  return session
}

export const jwtCb: TJwtCb = async ({ account, token, user }) => {
  console.log('in token')

  if (account) {
    token.id = user?.id as TMongoId
  }

  const isValidToken = await JwtGuard(token.id)

  if (!isValidToken) throw new Error('UNAUTHORIZED')

  return token
}
