import { TSignUpDto } from '@/api-interfaces/user.interfaces'
import Joi from 'joi'

export const signUpValidator = (input: TSignUpDto): Joi.ValidationResult<TSignUpDto> => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  })

  return schema.validate(input)
}
