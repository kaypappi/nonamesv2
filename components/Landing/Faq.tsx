import React from 'react'
import FaqCard from '../faqCard'
import { Card, CardContent, CardHeader } from '../UI/card'
import QuestionMark from "../../public/question.svg"
import Image from 'next/image'

const faqs = [
    {
        question: `Are there any measures in place to prevent 
        bullying or harassment on the platform`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `How can I find like-minded individuals to 
        chat with on No-Name?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `How does N0-Name promote genuine 
        connections despite the anonymous nature 
        of the platform?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Is there any way to save or revisit previous
        anonymous conversations on No-Name`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I switch to non-anonymous mode if I 
        want to reveal my identity to someone I'm 
        chatting with?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize my privacy settings on the 
        app to control who can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize my privacy settings on the 
        app to control who can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize hohpohj my privacy settings on the 
        app to control who can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize fserydtuf my privacy settings on the 
        app to control who can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize my privacy settings on the 
        app to control who can reach  tyuxctu out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize my privacy settings on the 
        app to control who eweqr can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
    {
        question: `Can I customize my privacy settings on the 
        app ytfuyiu to control who can reach out to me?`,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor eu augue ut lectus arcu bibendum at varius vel. Interdum consectetur libero id faucibus nisl. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sed egestas egestas fringilla phasellus faucibus. Massa massa ultricies mi quis hendrerit dolor. In hac habitasse platea dictumst quisque. A diam maecenas sed enim ut sem. Elit sed vulputate mi sit amet. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer. `
    },
]

const Faq = () => {
    return (
        <div className=' relative w-full'>
            <Image src={QuestionMark} alt='floating locks' className='absolute -right-5 bottom-28 z-10' />
            <Card className="w-full text-white my-40 p-20 relative overflow-y-hidden">
                <CardHeader className='p-0 mb-10'>
                    <h2 className='h3 font-allrox'>Things <span className=' text-slate-800'> people ask </span> us all the time </h2>
                </CardHeader>
                <CardContent className=''>
                    <FaqCard faqs={faqs} />
                </CardContent>

            </Card>
        </div>
    )
}

export default Faq