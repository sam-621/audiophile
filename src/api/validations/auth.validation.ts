import { TSignInDto, TSignUpDto } from '@/api-interfaces/user.interfaces'
import Joi from 'joi'

export const signUpValidator = (input: TSignUpDto): string[] | undefined => {
  const schema = Joi.object<TSignUpDto>({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6)
  })

  const { error } = schema.validate(input)

  return error?.details.map((item) => item.message)
}

export const signInValidator = (input: TSignInDto): string[] | undefined => {
  const schema = Joi.object<TSignInDto>({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6)
  })

  const { error } = schema.validate(input)

  return error?.details.map((item) => item.message)
}
