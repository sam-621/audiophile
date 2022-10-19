import { Account, Awaitable, Profile, Session, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'

export type TSessionCb =
  | ((params: { session: Session; user: User | AdapterUser; token: JWT }) => Awaitable<Session>)
  | undefined

export type TJwtCb =
  | ((params: {
      token: JWT
      user?: User | AdapterUser | undefined
      account?: Account | null | undefined
      profile?: Profile | undefined
      isNewUser?: boolean | undefined
    }) => Awaitable<JWT>)
  | undefined
