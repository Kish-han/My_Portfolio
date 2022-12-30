import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'


type Props = {}

const Hero = (props: Props) => {

    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwyMFRcoKj1kEEiDpD_S-Vh6rsVxsL3rCxg&usqp=CAU" alt="" />
            <div className="z-50">
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10 z-50'>
                    <span className='mr-3'>
                        {text}
                    </span>
                    <Cursor cursorColor='#7E6BDB' />
                </h1>
                <div className="pt-8 flex justify-center">
                    <Link href='#about'>
                        <div className="heroButton">About</div>
                    </Link>
                    {/* <Link href='#experience'>
                        <div className="heroButton">Experience</div>
                    </Link> */}
                    <Link href='#skills'>
                        <div className="heroButton">Skills</div>
                    </Link>
                    <Link href='#projects'>
                        <div className="heroButton">Projects</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero