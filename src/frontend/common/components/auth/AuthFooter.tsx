import { FC } from 'react'

export const AuthFooter: FC<Props> = ({ isSignInForm }) => {
  return (
    <div className="flex justify-center">
      <span className="text-center text-sm text-[#797979]">
        {isSignInForm ? 'Don’t you have an account? ' : 'Already have an account? '}
        <a href={isSignInForm ? '/sign-up' : '/sign-in'} className="font-bold">
          {isSignInForm ? 'Sign Up' : 'Sign In'}
        </a>
      </span>
    </div>
  )
}

type Props = {
  isSignInForm: boolean
}
