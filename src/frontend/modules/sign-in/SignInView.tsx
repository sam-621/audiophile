import { AuthHeader } from '@/front-components/auth/AuthHeader'
import { Button } from '@/front-components/custom/Button/Button'
import { Form } from '@/front-components/custom/Form'
import { TextInput } from '@/front-components/custom/Input/TextInput'
import { useSignIn } from './hooks/useSignIn'

export const SignInView = () => {
  const { onSubmit, register, errors } = useSignIn()
  return (
    <>
      <AuthHeader />
      <Form title="SIGN IN" className="flex flex-col gap-6" onSubmit={onSubmit}>
        <TextInput
          register={register('email')}
          type="email"
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
      </Form>
    </>
  )
}
