import { IUser } from '@/shared/interfaces/user.interface'

// Inputs
export type ISignUpInput = Pick<IUser, 'name' | 'email' | 'password'>
export type ISignInInput = Pick<IUser, 'email' | 'password'>

// Dto
export type ISignUpDto = ISignUpInput
export type ISignInDto = ISignInInput
