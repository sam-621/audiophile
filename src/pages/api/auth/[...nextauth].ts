import { TSignInDto } from '@/api-interfaces/user.interfaces'
import { AuthService } from '@/api-services/auth.service'
import { is404Endpoint } from '@/api-utils/request'
import { signInValidator } from '@/api-validations/auth.validation'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (is404Endpoint(req.method || '', 'POST')) {
          return null
        }

        const dto = credentials as unknown as TSignInDto

        const errors = signInValidator(dto)

        if (Boolean(errors?.length)) {
          return null
        }

        const { data } = await AuthService.signIn(dto)
        return {
          ...data,
          // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
          then(_onfulfilled?, _onrejected?) {}
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      token.id = user?._id!
      return token
    }
  },
  pages: {
    signIn: '/auth/sign-in'
  }
}

export default NextAuth(authOptions)
