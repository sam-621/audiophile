import { SignInView } from '@/front-modules/sign-in/SignInView'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SignIn() {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log({ email, password })

    const res = await signIn('credentials', { email, password, redirect: false })
    console.log({
      res
    })

    if (!res?.ok) return

    push('/components')
  }

  return <SignInView />
}
