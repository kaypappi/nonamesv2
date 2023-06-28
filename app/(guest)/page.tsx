import Hero from '@/components/Landing/Hero'
import WhyNoName from '@/components/Landing/WhyNoName'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-between p-24">
      <Hero />
      <WhyNoName classes=' mt-44' />
    </main>
  )
}
