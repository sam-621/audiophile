import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

export const useAuth = () => {
  const { status, data } = useSession()
  const [isLoginOut, setIsLoginOut] = useState(false)
  console.log(status)

  const logOut = async () => {
    setIsLoginOut(true)
    await signOut()
    setIsLoginOut(false)
  }

  return {
    isLoading: status === 'loading',
    isAuth: status === 'authenticated',
    userId: data?.user.id,
    isLoginOut,
    logOut
  }
}
