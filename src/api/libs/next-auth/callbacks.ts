import { JwtGuard } from '@/api-guards/jwt.guard'
import { TMongoId } from '@/shared/interfaces/utils'
import { TJwtCb, TSessionCb } from './interfaces/callbacks.interface'

export const sessionCb: TSessionCb = ({ session, token }) => {
  session.user.id = token.id

  return session
}

export const jwtCb: TJwtCb = ({ account, token, user }) => {
  if (account) {
    token.id = user?.id as TMongoId
  }

  if (!JwtGuard(token.id)) throw new Error('UNAUTHORIZED')

  return token
}
