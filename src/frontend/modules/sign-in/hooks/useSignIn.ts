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
  const [globalError, setGlobalError] = useState('')

  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })

  const { errors, isSubmitting } = formState

  const onSubmit = async (data: IFormInputs) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false })

      if (!res?.ok) {
        const errorMessage = getErrorMessage({ module: 'sign-in', statusCode: res?.status })
        setGlobalError(errorMessage)
        return
      }

      await push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    globalError,
    isSubmitting
  }
}

interface IFormInputs {
  email: string
  password: string
}
