
import OAuthButtons from "@/components/Auth/oauth-buttons";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReactComponent as Mail } from "@/public/svgs/Mail.svg"
import Link from "next/link";


export default function SignUp() {
    return (
        <div className="w-full">
            <Card className="w-full p-10 text-white">
                <CardHeader className="p-0">
                    <Icon name="small_logo" className=" text-slate-400 w-10 h-10" />
                    <Separator className=' !my-8 bg-[#0f0f0f]' />
                </CardHeader>
                <CardContent>
                    <CardTitle className="h5 font-allrox">Create Account</CardTitle>
                    <OAuthButtons className="mt-4 mb-14" />
                    <Separator className=' !mb-6 bg-[#0f0f0f]' />
                    <Button className='w-full rounded-md text-base mb-10' variant={'secondary'} size={'sm'}><Mail className="mr-1 h-6 w-6" /> Sign up with google</Button>
                    <p className="p text-white text-start text-opacity-70">By signing up, you agree to the Terms of Service
                        and Privacy Policy.</p>
                </CardContent>
            </Card>

            <p className="text-white text-opacity-70 mt-14 text-center">
            Already have an account? <Link className=" text-brand-800 ho" href={'/signin'}>Sign in</Link> instead.
            </p>
        </div>
    )
}