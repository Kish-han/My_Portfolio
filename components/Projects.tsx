import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4]
    return (
        <motion.div 
        initial ={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className="relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex scrollbar scrollbar-thumb-[#7E6BDB]/80 scrollbar-track-gray-400/20 scrollbar-rounded-sm scrollbar-thumb-rounded-xl">
                {
                    projects.map((project, i) => (
                        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen">
                            <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            viewport={{
                                once: true,
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwyMFRcoKj1kEEiDpD_S-Vh6rsVxsL3rCxg&usqp=CAU" alt="" />
                            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#7E6BDB]'>Case Study {i + 1} of {projects.length}</span>{" "} UPS clone
                                </h4>
                                <p className='text-lg text-center md:text-left px-9'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur fuga sed odio voluptas delectus a vero hic ipsum inventore quisquam? Maiores culpa eveniet nam repellendus.</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full absolute top-[30%] bg-[#7E6BDB]/10 left-0 h-[400px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects 