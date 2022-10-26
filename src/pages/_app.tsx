import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import 'tailwindcss/tailwind.css'
import '../frontend/styles/globals.css'

export const queryClient = new QueryClient()

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp
