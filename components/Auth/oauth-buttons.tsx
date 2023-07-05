"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter, useSearchParams } from "next/navigation";
import { ReactComponent as AppleLogo } from '@/public/svgs/appleLogo.svg'
import { ReactComponent as GoogleLogo } from '@/public/svgs/google.svg'
import { getGoogleProvider, loginWithProvider } from "@/auth/firebase";
import { useFirebaseAuth } from "@/auth/firebase";
import { clientConfig } from "@/config/client-config";

import { useAuth } from "../../auth/hooks";
import useSWRMutation from 'swr/mutation'


interface OAuthButtonsProps {
    className?: string
}

const OAuthButtons = ({ className }: OAuthButtonsProps) => {

    const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
    const router = useRouter();
    const params = useSearchParams();
    const loginWithGoogle = async () => {
        const { GoogleAuthProvider } = await import("firebase/auth");
        const auth = await getFirebaseAuth();
        const tenant = await loginWithProvider(
            auth,
            await getGoogleProvider(auth),
            GoogleAuthProvider.credentialFromError
        );
        return tenant
    }
    const { trigger } = useSWRMutation('/api/login', loginWithGoogle, {
        onSuccess: () => {
            const redirect = params?.get("redirect");
            router.push(redirect ?? "/");
        }
    })
    return (
        <div className={`flex flex-col gap-4 text-base ${className}`}>
            <Button  className='w-full flex items-center   rounded-md text-base ' variant={'outline'} size={'sm'}><AppleLogo className="mr-2 h-6 w-6" />  Sign up with Apple</Button>
            <Button onClick={()=> trigger()} className='w-full rounded-md text-base' variant={'outline'} size={'sm'}><GoogleLogo className="mr-1 h-6 w-6" /> Sign up with google</Button>
        </div>
    )
}

export default OAuthButtons