import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { getErrorMessage } from 'frontend/common/utils/errors'
import Joi from 'joi'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignUpDto } from '../interfaces/dtos'
import { useSignUp } from './petitions/useSignUp'

const schema = Joi.object<IFormInputs>({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('Must be a valid email'),
  password: Joi.string().min(6).message('Must be at least 6 characters long'),
  firstName: Joi.string().min(3).message('First name must be at least 3 characters long'),
  lastName: Joi.string().min(3).message('Last name must be at least 3 characters long'),
  confirmPassword: Joi.string().min(6).message('Must be at least 6 characters long')
})

export const useSignUpForm = () => {
  const { push } = useRouter()
  const [globalError, setGlobalError] = useState('')
  const { mutateAsync: signUp } = useSignUp()

  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })

  const { errors, isSubmitting } = formState

  const onSubmit = async (data: IFormInputs) => {
    setGlobalError('')

    if (data.confirmPassword !== data.password) {
      setGlobalError('Passwords must match')
      return
    }

    try {
      const newUser: SignUpDto = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        email: data.email
      }
      await signUp(newUser)
      await signIn('credentials', { ...newUser, redirect: false })
      await push('/')
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        setGlobalError(getErrorMessage())
        return
      }
      const errorMessage = getErrorMessage({
        axiosResponse: error,
        module: 'sign-up',
        statusCode: error.response?.status
      })
      setGlobalError(errorMessage)
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

type IFormInputs = SignUpDto & {
  confirmPassword: string
}
