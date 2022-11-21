import { AxiosError } from 'axios'
import { ApiResponse } from '../interfaces/utils'

type ErrorModule = 'generic' | 'sign-in' | 'sign-up'

type ErrorMessageConfig = {
  statusCode?: number
  module?: ErrorModule
  axiosResponse?: AxiosError<ApiResponse<null>> | null
}

enum Messages {
  GENERIC_ERROR = 'An Unexpected error occurred, please reload the page',
  BAD_CREDENTIALS = 'Email or password are incorrect',
  EMAIL_ALREADY_TAKEN = 'This email is already taken',
  WRONG_DATA_SCHEMA = 'The data schema is incorrect, please update it and re send them'
}

export const getErrorMessage = (config?: ErrorMessageConfig): Messages => {
  const { statusCode = 0, module = 'generic' } = config ?? {}

  switch (module) {
    case 'generic':
      return Messages.GENERIC_ERROR
    case 'sign-in':
      if ([400, 401].includes(statusCode)) return Messages.BAD_CREDENTIALS

      return Messages.GENERIC_ERROR

    case 'sign-up':
      console.log('hi')
      console.log(config?.axiosResponse)

      if (!config?.axiosResponse) return Messages.GENERIC_ERROR
      const message = config.axiosResponse.response?.data.message || ''

      if (message.includes('already exists')) return Messages.EMAIL_ALREADY_TAKEN
      console.log({
        err: statusCode
      })

      if (statusCode === 400) return Messages.WRONG_DATA_SCHEMA

      return Messages.GENERIC_ERROR

    default:
      return Messages.GENERIC_ERROR
  }
}
