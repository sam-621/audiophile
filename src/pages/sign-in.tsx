import { AuthLayout } from '@/front-components/layouts/AuthLayout'
import { SignInView } from '@/front-modules/sign-in/SignInView'

export default function SignIn() {
  return (
    <AuthLayout>
      <SignInView />
    </AuthLayout>
  )
}
