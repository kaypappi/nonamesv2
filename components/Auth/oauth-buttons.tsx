import React from 'react'
import { Button } from '../ui/button'
import  { ReactComponent as AppleLogo } from '@/public/svgs/appleLogo.svg'
import  { ReactComponent as GoogleLogo } from '@/public/svgs/google.svg'



interface OAuthButtonsProps{
    className?:string
}

const OAuthButtons = ({className}:OAuthButtonsProps) => {
  return (
    <div className={`flex flex-col gap-4 text-base ${className}`}>
        <Button className='w-full flex items-center   rounded-md text-base ' variant={'outline'} size={'sm'}><AppleLogo className="mr-2 h-6 w-6"/>  Sign up with Apple</Button>
        <Button className='w-full rounded-md text-base' variant={'outline'} size={'sm'}><GoogleLogo className="mr-1 h-6 w-6"/> Sign up with google</Button>
    </div>
  )
}

export default OAuthButtons