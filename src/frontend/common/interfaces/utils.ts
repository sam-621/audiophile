import { ParsedUrlQuery } from 'querystring'

export type InputTypes = 'text' | 'email' | 'password'

export interface ApiResponse<T> {
  data: T
  message: string
}

export type PathPages = (
  | string
  | {
      params: ParsedUrlQuery
      locale?: string | undefined
    }
)[]
