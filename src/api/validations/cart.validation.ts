import { AddToCartDto } from '@/api-interfaces/cart.interfaces'
import Joi from 'joi'

export const addToCartValidations = (dto: AddToCartDto): string[] | undefined => {
  const schema = Joi.object<AddToCartDto>({
    products: Joi.array().min(1).message('Must have at least one product')
  })

  const { error } = schema.validate(dto)

  return error?.details.map(item => item.message)
}
