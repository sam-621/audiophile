import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const schema = Joi.object<IFormInputs>({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('Must be a valid email'),
  password: Joi.string().min(6).message('Must be at least 6 characters long')
})

export const useSignIn = () => {
  const { push } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })
  const { errors } = formState

  const onSubmit = async (data: IFormInputs) => {
    try {
      setIsLoading(true)
      const res = await signIn('credentials', { ...data, redirect: false })
      console.log({
        res
      })

      if (res?.ok) {
        await push('/')
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isLoading
  }
}

interface IFormInputs {
  email: string
  password: string
}
