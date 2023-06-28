import Faq from '@/components/Landing/Faq'
import Hero from '@/components/Landing/Hero'
import WhyNoName from '@/components/Landing/WhyNoName'
import { Card, CardContent } from '@/components/UI/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-between p-24">
      <Hero />
      <WhyNoName classes=' mt-44' />
      <Faq />
      <Card style={{ background: 'radial-gradient(68.05% 110.07% at 50.00% 39.93%, rgba(1, 17, 41, 0.23) 0%, rgba(19, 64, 132, 0.00) 100%)' }} className="w-full h-full text-white  ">

        <CardContent className='grid grid-cols-12'>
          <div className=' col-span-6'>
            <h2 className='h3 font-allrox mb-4'>Break the Barriers  </h2>
            <p className='p text-white text-opacity-70 max-w-md'>Sign up today and experience the freedom of anonymous
              conversations. Join our community of like-minded individuals.</p>
          </div>
          <div className="col-span-6 flex flex-col items-end justify-center gap-4">
            <Button className=' w-56' size={'sm'}>Create Account</Button>
            <Button className=' w-56' size={'sm'} variant={'outline'}>Sign In </Button>
          </div>
        </CardContent>

      </Card>
    </main>
  )
}
