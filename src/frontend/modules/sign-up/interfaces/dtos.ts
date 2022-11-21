import { IUser } from '@/shared/interfaces/user'

export type SignUpDto = Pick<IUser, 'firstName' | 'lastName' | 'email' | 'password'>
