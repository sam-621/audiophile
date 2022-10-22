import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

const schema = Joi.object<IFormInputs>({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('Must be a valid email'),
  password: Joi.string().min(6).message('Must be at least 6 characters long')
})

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })

  const onSubmit = async (data: IFormInputs) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false })
      console.log({ res })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors
  }
}

interface IFormInputs {
  email: string
  password: string
}
