import { TSignInDto } from '@/api-interfaces/user.interfaces'
import { UserCredentialsConfig } from '@/api-interfaces/utils.interface'
import { AuthService } from '@/api-services/auth.service'
import { signInValidator } from '@/api-validations/auth.validation'
import Credentials, { CredentialInput } from 'next-auth/providers/credentials'

const credentialsConfig: UserCredentialsConfig<Record<string, CredentialInput>> = {
  credentials: {
    email: {},
    password: {}
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
}

export const CredentialsProvider = Credentials(credentialsConfig)
