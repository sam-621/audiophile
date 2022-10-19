import { jwtCb, sessionCb } from '@/api-libs/next-auth/callbacks'
import { CredentialsProvider } from '@/api-libs/next-auth/providers/Credentials.provider'
import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [CredentialsProvider],
  callbacks: {
    jwt: jwtCb,
    session: sessionCb
  },
  pages: {
    signIn: '/sign-in'
  }
}

export default NextAuth(authOptions)
