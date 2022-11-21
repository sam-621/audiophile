import { joiResolver } from '@hookform/resolvers/joi'
import { getErrorMessage } from 'frontend/common/utils/errors'
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
  const [globalError, setGlobalError] = useState('')

  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })

  const { errors } = formState

  const onSubmit = async (data: IFormInputs) => {
    try {
      setIsLoading(true)
      const res = await signIn('credentials', { ...data, redirect: false })

      if (!res?.ok) {
        const errorMessage = getErrorMessage({ module: 'sign-in', statusCode: res?.status })
        setGlobalError(errorMessage)
        setIsLoading(false)
        return
      }

      await push('/')
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
    globalError,
    isLoading
  }
}

interface IFormInputs {
  email: string
  password: string
}
