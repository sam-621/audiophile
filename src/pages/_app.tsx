import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '../frontend/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Session } from 'next-auth'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
