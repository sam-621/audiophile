import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const { status, data } = useSession()

  return {
    isLoading: status === 'loading',
    isAuth: status === 'authenticated',
    userId: data?.user.id
  }
}