import { IUser } from '@/shared/interfaces/user'

// Inputs
export type TSignUpInput = Pick<IUser, 'firstName' | 'lastName' | 'email' | 'password'>
export type TSignInInput = Pick<IUser, 'email' | 'password'>

// Dto
export type TSignUpDto = TSignUpInput
export type TSignInDto = TSignInInput

// Extra
export type TSaveUser = Omit<IUser, '_id'>
