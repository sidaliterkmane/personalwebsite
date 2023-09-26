"use client"

import Image from "next/image"
import pp from '../../public/images/profilePicture.jpg'

import { motion } from "framer-motion"

import { FaArrowRight } from 'react-icons/fa'
import { RiDownload2Fill } from 'react-icons/ri'

import Button from "./Button"

const waveAnimation = {
    wave: {
        rotate: [0, 20, -20, 0, 20, -20, 0],
        transition: {
            duration: 5,
            repeat: Infinity
        }
    }
}

const Hero = () => {
    return (
        <div className="w-full px-[1rem] flex justify-center">
            <div className="
            w-[1200px]
            flex
            flex-col
            justify-center
            items-center
            px-[1rem]
        ">
                <motion.div className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} >
                    <Image src={pp} alt="Memoji" width={120} height={100} className="rounded-full mb-[2rem]" />
                </motion.div>
                <p className="text-sm font-light flex gap-[10px]">
                    Hi, I'm Sid Ali Terkmane 👋🏻
                </p>
                <p className="
                max-w-[600px]
                text-3xl
                text-center
                font-normal
                pt-[2rem]
                gradient
                sm:text-[50px]
                leading-none
                mb-[2rem]
                ">
                    Transforming ideas into intuitive & captivating web experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-[1rem] mt-[2rem]">

                    {/*<Button text="View my projects" icon={<FaArrowRight size={14} color='gray' />} />*/}

                    
                    <a href="sidaliterkmane_resume.pdf" download='sidaliterkmane_resume.pdf'><Button text="View my resume" icon={<RiDownload2Fill size={15} color='gray' />} /></a>
                    
                </div>

            </div>
        </div >
    )
}

export default Hero