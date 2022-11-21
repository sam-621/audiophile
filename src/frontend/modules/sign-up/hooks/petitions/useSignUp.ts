import { ApiResponse } from '@/front-interfaces'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { SignUpDto } from '../../interfaces/dtos'
import { signUp } from '../../services/sign-up'

type TData = AxiosResponse<ApiResponse<null>>
type TError = AxiosError<ApiResponse<null>>
type TVariables = SignUpDto
type TContext = unknown

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>

export const useSignUp = (options?: TOptions) => {
  return {
    ...useMutation<TData, TError, TVariables, TContext>({
      mutationFn: signUp,
      ...options
    })
  }
}
