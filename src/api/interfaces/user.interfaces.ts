import { IUser } from '@/shared/interfaces/user.interface'

export type ISignUpInput = Pick<IUser, 'name' | 'email' | 'password'>
export type ISignInInput = Pick<IUser, 'email' | 'password'>
