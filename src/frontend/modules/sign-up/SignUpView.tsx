import { AuthHeader } from '@/front-components/auth/AuthHeader'
import { Input } from '@/front-components/custom/Input/Input'
import { FormCard } from '@/front-components/forms/FormCard'

export const SignUpView = () => {
  return (
    <>
      <AuthHeader />
      <FormCard title="Sign Up">
        <Input
          variant="text"
          type="text"
          label="Name"
          placeholder="Insert your name"
          value="sam"
          onChange={() => null}
          error="hi"
        />
        <Input
          variant="text"
          type="text"
          label="Name"
          placeholder="Insert your name"
          value="sam"
          onChange={() => null}
        />
      </FormCard>
    </>
  )
}
