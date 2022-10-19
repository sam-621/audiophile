import { JwtGuard } from '@/api-guards/jwt.guard'
import { TMongoId } from '@/shared/interfaces/utils'
import { CredentialsProvider } from 'api/providers/Credentials.provider'
import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [CredentialsProvider],
  callbacks: {
    async jwt({ account, token, user }) {
      if (account) {
        token.id = user?.id as TMongoId
      }

      if (!JwtGuard(token.id)) throw new Error('UNAUTHORIZED')

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
