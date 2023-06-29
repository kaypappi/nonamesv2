"use client"

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { Card, CardContent } from './ui/card'

interface faqCardProps {
    faqs: {
        question: string,
        answer: string
    }[]
}

const faqCard = ({ faqs }: faqCardProps) => {
    const [activeFaq, setActiveFaq] = useState(0)
    return (
        <div className=' text-white grid grid-cols-12 gap-x-20'>
            <div className="col-span-6">
                <ScrollArea type='always' dir='rtl' className=" h-120 w-full rounded-md text-end ">
                    <div className="p-4 ml-10">
                        <div className='flex flex-col gap-6'>
                            {faqs.map((faq, index) => (
                                <div onClick={() => setActiveFaq(index)} className={`text-sm cursor-pointer max-w-md mr-auto transition  text-white ${index !== activeFaq ? 'text-opacity-20' : ''}`} key={faq.question}>
                                    {faq.question}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </div>
            <div className="col-span-6">
                <Card style={{ background: 'radial-gradient(76.60% 76.61% at 51.53% 48.09%, rgba(78, 6, 115, 0.23) 0%, rgba(93, 19, 132, 0.00) 100%)' }} className="w-full h-full text-white  ">

                    <CardContent className=''>
                        <p className='p font-extralight'> {faqs[activeFaq].answer}</p>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default faqCard