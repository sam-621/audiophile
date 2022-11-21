import Link from 'next/link'
import { FC } from 'react'

export const AuthFooter: FC<Props> = ({ isSignInForm }) => {
  return (
    <div className="flex justify-center">
      <span className="text-center text-sm text-[#797979]">
        {isSignInForm ? 'Don’t you have an account? ' : 'Already have an account? '}
        <Link href={isSignInForm ? '/sign-up' : '/sign-in'}>
          <a className="font-bold">{isSignInForm ? 'Sign Up' : 'Sign In'}</a>
        </Link>
      </span>
    </div>
  )
}

type Props = {
  isSignInForm?: boolean
}
