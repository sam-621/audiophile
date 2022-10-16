import { IPayloadInput } from '@/api-interfaces/auth.interfaces'
import { IUser } from '@/shared/interfaces/user.interface'

declare module 'next-auth' {
  interface Session {
    user: IUser
  }
  interface User extends IUser {
    id: number
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends IPayloadInput {
    /** OpenID ID Token */
    id: number
  }
}
