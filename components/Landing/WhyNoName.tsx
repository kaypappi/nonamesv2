"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CircleQuestion from "../../public/circleQuestion.svg"
import CharmingCouple from "../../public/charmingCouple.svg"
import { Button } from '../ui/button'
import { Icons } from '../icons'

interface WhyNoNameProps {
  classes?: string
}

const WhyNoName = ({ classes }: WhyNoNameProps) => {
  return (

    <div className='relative w-full'>
      <Image src={CircleQuestion} alt='floating locks' className='absolute -left-20 top-20 z-10' />
      <Card className="w-full text-white my-40 relative overflow-y-hidden">

        <CardContent className=' p-20'>


          <div className="grid grid-cols-12">
            <div className="col-span-6   row-span-12 flex flex-1 grow h-full flex-col justify-center">
              <h2 className='h3 font-allrox'>Why <span className=' text-slate-800'>"No Name"</span> </h2>
              <p className=' p text-white text-opacity-70 max-w-md mt-4 mb-14'>"No Name" is an  application that enables anonymous conversations, empowering users to express themselves freely and forge genuine connections without the fear of judgment or repercussion. Unleash your thoughts, engage in open dialogue, and experience the power of anonymity in fostering meaningful interactions. Join WhisperChat and discover a world of authentic communication, where your voice truly matters.</p>
              <Button className=' w-max group' variant={'outline'} size={'sm'}>
              Create an account and start exploring
              <span className='ml-2 group-hover:text-black'>
              <Icons.arrow_right_circle  />
              </span>
              </Button>
            </div>
            <div className="col-span-6 ">
              <Image src={CharmingCouple} alt='charmin black couple wearing party masks' className=' absolute right-0 bottom-0' />
            </div>
          </div>


        </CardContent>

      </Card>
    </div>
  )
}

export default WhyNoName