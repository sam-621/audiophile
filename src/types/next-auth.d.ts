import { IPayloadInput } from '@/api-interfaces/auth.interfaces'
import { TMongoId } from '@/shared/interfaces/utils'

declare module 'next-auth' {
  interface Session {
    user: {
      id: TMongoId
    }
  }
  interface User {
    id: TMongoId
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends IPayloadInput {
    /** User id */
    id: TMongoId
  }
}
