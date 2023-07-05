"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useFirebaseAuth } from "@/auth/firebase";
import { clientConfig } from "@/config/client-config";
import useSWRMutation from 'swr/mutation'
import { Button } from "@/components/ui/button";


const dashboard = () => {
  const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
  const router = useRouter();
  const params = useSearchParams();
  const handleLogout = async () => {
    const auth = await getFirebaseAuth();
    const { signOut } = await import("firebase/auth");
    return await signOut(auth);
  }

  const { trigger, isMutating} = useSWRMutation('/api/logout', handleLogout, {
    onSuccess: () => {
      const redirect = params?.get("redirect");
      router.push(redirect ?? "/");
    }
  })
  return (
    <div>dashboard
     <Button loading={isMutating} onClick={()=> trigger()} className='w-full rounded-md text-base' variant={'outline'} size={'sm'}>LogOut</Button>
    </div>
  )
}

export default dashboard