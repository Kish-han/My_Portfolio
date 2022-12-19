import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-7 md:px-20 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
            initial={{
                x: -300,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwyMFRcoKj1kEEiDpD_S-Vh6rsVxsL3rCxg&usqp=CAU"
            className='-mb-20 md:mb-0 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 lg:w-[250px] lg:h-[350px] xl:w-[300px] xl:h-[400px]'
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-[32px] md:text-3xl font-semibold">Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
                <p className="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolores, nihil, sed aliquid esse repellendus doloribus, id aperiam temporibus placeat delectus! Numquam provident ipsum necessitatibus quo, tempore sint non assumenda est pariatur vel vitae sunt corporis quasi nostrum aut dignissimos id molestiae. Ipsa, quasi. Tenetur explicabo nisi quaerat quis aperiam!
                </p>
            </div>
        </motion.div>
    )
}

export default About