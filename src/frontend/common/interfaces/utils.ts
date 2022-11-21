export type InputTypes = 'text' | 'email' | 'password'

export interface ApiResponse<T> {
  data: T
  message: string
}
