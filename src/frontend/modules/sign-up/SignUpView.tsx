import { AuthHeader } from '@/front-components/auth/AuthHeader'
import { Button } from '@/front-components/custom/Button/Button'
import { Input } from '@/front-components/custom/Input/Input'
import { FormCard } from '@/front-components/forms/FormCard'

export const SignUpView = () => {
  return (
    <>
      <AuthHeader />
      <FormCard title="SIGN UP" className="flex flex-col gap-6">
        <Input
          variant="text"
          type="text"
          label="First Name"
          placeholder="Insert your first name"
          value=""
          onChange={() => null}
        />
        <Input
          variant="text"
          type="text"
          label="Last Name"
          placeholder="Insert your last name"
          value=""
          onChange={() => null}
        />
        <Input
          variant="text"
          type="text"
          label="Email"
          placeholder="Insert your email"
          value=""
          onChange={() => null}
        />
        <Input
          variant="text"
          type="text"
          label="Password"
          placeholder="Insert your password"
          value=""
          onChange={() => null}
        />
        <Button variant="base" text="Submit" />
      </FormCard>
    </>
  )
}
