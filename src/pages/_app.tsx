import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { AppLayout } from '@/front-components/layouts/AppLayout'

import 'tailwindcss/tailwind.css'
import '../frontend/styles/globals.css'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SessionProvider>
  )
}

export default MyApp
