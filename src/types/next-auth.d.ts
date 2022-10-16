import { IPayloadInput } from '@/api-interfaces/auth.interfaces'
import { IUser } from '@/shared/interfaces/user.interface'
import { TEntityWithId, TMongoId } from '@/shared/interfaces/utils'

declare module 'next-auth' {
  interface Session {
    user: TEntityWithId<IUser>
  }
  interface User extends TEntityWithId<IUser> {
    id: number
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends IPayloadInput {
    /** User id */
    id: TMongoId
  }
}
