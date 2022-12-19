import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-5xl mx-auto p-5 z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center">
                <SocialIcon
                    url='https://github.com/Kish-han'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/kishan-r-8b7449217/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/Kish-han'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/kishan-r-8b7449217/'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5 ,
                }}
                className="flex flex-row items-center">
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-500' >Get In Touch</p>
            </motion.div>
        </header>
    )
}

export default Header