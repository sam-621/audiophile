import { Input } from '@/front-components/custom/Input/Input'
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5 mt-7">
        <Input
          label="Email"
          type="email"
          variant="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          variant="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign in</button>
    </form>
  )
}
