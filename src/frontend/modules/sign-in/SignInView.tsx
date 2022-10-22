import { AuthHeader } from '@/front-components/auth/AuthHeader'
import { Button } from '@/front-components/custom/Button/Button'
import { FormCard } from '@/front-components/forms/FormCard'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { TextInput } from '@/front-components/custom/Input/TextInput'
import { signIn } from 'next-auth/react'

interface IFormInputs {
  email: string
  password: string
}

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('Must be a valid email'),
  password: Joi.string().min(6).message('Must be at least 6 characters long')
})

export const SignInView = () => {
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

  return (
    <>
      <AuthHeader />
      <FormCard title="SIGN IN" className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            register={register('email')}
            type="text"
            label="Email"
            placeholder="Insert your email"
            error={errors.email?.message}
          />
          <TextInput
            register={register('password')}
            type="password"
            label="Password"
            placeholder="Insert your password"
            error={errors.password?.message}
          />
          <Button variant="base" text="Submit" />
        </form>
      </FormCard>
    </>
  )
}
