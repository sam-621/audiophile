import { AuthLayout } from '@/front-components/layouts/AuthLayout'
import { SignUpView } from '@/front-modules/sign-up/SignUpView'

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpView />
    </AuthLayout>
  )
}

export default SignUpPage
