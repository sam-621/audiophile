import { joiResolver } from '@hookform/resolvers/joi'
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
  firstName: Joi.string().required().message('First name is required'),
  lastName: Joi.string().required().message('Last name is required'),
  confirmPassword: Joi.string().min(6).message('Must be at least 6 characters long')
})

export const useSignUpForm = () => {
  const { push } = useRouter()
  const [globalError, setGlobalError] = useState('')
  const { mutateAsync: signUp, error } = useSignUp()

  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: joiResolver(schema)
  })

  const { errors, isSubmitting } = formState

  const onSubmit = async (data: IFormInputs) => {
    if (data.confirmPassword !== data.password) {
      setGlobalError('Passwords must match')
      return
    }

    try {
      await signUp(data)
      await signIn('credentials', { ...data, redirect: false })
      await push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    globalError:
      globalError ||
      getErrorMessage({ axiosResponse: error, module: 'sign-up', statusCode: error?.status }),
    isSubmitting
  }
}

type IFormInputs = SignUpDto & {
  confirmPassword: string
}
