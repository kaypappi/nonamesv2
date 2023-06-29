"use client"

import React, { forwardRef } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Locks from "../../public/locks.svg"
import ChatBubbles from "../../public/chatbubbles.svg"


const Hero = () => {
    return (
        <div className=' text-white relative'>
            <motion.div animate={{ y: [0, 30, 0] }} transition={{
                y: {
                    duration: 2,
                    repeat: Infinity
                }
            }}>
                <Image src={Locks} alt='floating locks' className='absolute -left-36  ' />
            </motion.div>
            <motion.div animate={{ y: [450, 420, 450] }} transition={{
                y: {
                    duration: 2,
                    repeat: Infinity
                }
            }}>
                <Image src={ChatBubbles} alt='floating locks' className='absolute -right-36 -bottom-0 ' />
            </motion.div>

            <div className=' flex flex-col items-center text-center '>
                <h1 className=' font-allrox  h1 text-white max-w-5xl  mx-auto'>
                    Discover the Power of <span className=' text-slate-800'>Anonymity: </span>
                    Chat Freely, Unfiltered
                    and Unmasked
                </h1>
                <p className="p font-extralight text-white my-10 text-opacity-70 max-w-xl">An app has no name, so why should you? Send and receive texts while being
                    anonymous! Chat, share links and keep guessing!!</p>
                <div className=' flex gap-4'>
                    <Button
                        variant={'default'}
                        size={'lg'}
                        className='w-48'
                    >Create Account</Button>
                    <Button
                        variant={'outline'}
                        size={'lg'}
                        className='w-48'
                    >Sign In</Button>
                </div>
            </div>

        </div>
    )
}

export default Hero