import { AuthFooter } from '@/front-components/auth/AuthFooter'
import { Button } from '@/front-components/custom/Button/Button'
import { Form } from '@/front-components/custom/Form'
import { Input } from '@/front-components/custom/Input/Input'
import Link from 'next/link'
import { useSignIn } from '../hooks/useSignIn'

export const SignInForm = () => {
  const { onSubmit, register, errors, isLoading } = useSignIn()

  return (
    <Form title="SIGN IN" className="flex flex-col gap-6" onSubmit={onSubmit}>
      <Input
        register={register('email')}
        type="email"
        label="Email"
        placeholder="Insert your email"
        error={errors.email?.message}
      />
      <div>
        <Input
          register={register('password')}
          type="password"
          label="Password"
          placeholder="Insert your password"
          error={errors.password?.message}
        />
        <div className="flex justify-end">
          <Link href="/forgot-password">
            <a href="/forgot-password" className="text-xs text-primary font-bold mt-2">
              FORGOT PASSWORD?
            </a>
          </Link>
        </div>
      </div>
      <Button variant="base" text="Submit" disabled={isLoading} />
      <AuthFooter isSignInForm />
    </Form>
  )
}
