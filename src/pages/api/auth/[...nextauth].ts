import { TSignInDto } from '@/api-interfaces/user.interfaces'
import { AuthService } from '@/api-services/auth.service'
import { signInValidator } from '@/api-validations/auth.validation'
import { TMongoId } from '@/shared/interfaces/utils'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const dto: TSignInDto = {
          email: credentials?.email || '',
          password: credentials?.password || ''
        }

        const errors = signInValidator(dto)

        if (Boolean(errors?.length)) return null

        const { data } = await AuthService.signIn(dto)

        if (!Boolean(data)) return null

        return {
          id: data!
        }
      }
    })
  ],
  callbacks: {
    jwt({ account, token, user }) {
      if (account) {
        token.id = user?.id as TMongoId
      }

      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    }
  },
  pages: {
    signIn: '/sign-in'
  }
}

export default NextAuth(authOptions)
