import { Button } from '@/front-components/custom/Button/Button'
import { Form } from '@/front-components/custom/Form'
import { Input } from '@/front-components/custom/Input/Input'
import { useSignIn } from '../hooks/useSignIn'

export const SignInForm = () => {
  const { onSubmit, register, errors } = useSignIn()

  return (
    <Form title="SIGN IN" className="flex flex-col gap-6" onSubmit={onSubmit}>
      <Input
        register={register('email')}
        type="email"
        label="Email"
        placeholder="Insert your email"
        error={errors.email?.message}
      />
      <Input
        register={register('password')}
        type="password"
        label="Password"
        placeholder="Insert your password"
        error={errors.password?.message}
      />
      <Button variant="base" text="Submit" />
    </Form>
  )
}
