import { AuthFooter, Button, ErrorMessage, Form, Input } from '@/front-components'
import { useSignUpForm } from '../hooks/useSignUpForm'

export const SignUpForm = () => {
  const { onSubmit, register, errors, globalError, isSubmitting } = useSignUpForm()

  return (
    <Form title="SIGN IN" className="flex flex-col gap-6" onSubmit={onSubmit}>
      <Input
        register={register('firstName')}
        type="text"
        label="First Name"
        placeholder="Insert your first name"
        error={errors.firstName?.message}
      />
      <Input
        register={register('lastName')}
        type="text"
        label="Last Name"
        placeholder="Insert your last name"
        error={errors.lastName?.message}
      />
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
      <Input
        register={register('confirmPassword')}
        type="password"
        label="Confirm Password"
        placeholder="Insert your password"
        error={errors.password?.message}
      />
      <ErrorMessage error={globalError} />
      <Button type="submit" variant="base" text="SIGN IN" disabled={isSubmitting} />
      <AuthFooter />
    </Form>
  )
}
