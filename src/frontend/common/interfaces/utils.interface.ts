export type TInputTypes = 'text' | 'email' | 'password'

export interface Response<T> {
  data: T
  message: string
}
