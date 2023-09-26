"use client"

import Card from "./Card"

import { RiCodeSSlashLine } from 'react-icons/ri'
import { BsWindowFullscreen, BsDatabase } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'

const About = () => {
    return (
        <div className="w-full px-[1rem] flex justify-center ">
            <div className="
                w-[1200px]
                flex
                flex-col
                items-center
                px-[1rem]
                pb-[100px] 
                border-b-[1px]
                border-gray-400
                border-opacity-10
            ">
                <p className="
                    max-w-[600px]
                    text-2xl
                    text-center
                    font-light
                    gradient
                    sm:text-[35px]
                    leading-none
                    mb-[4rem]
                ">
                    Delivering impactful results, with an obsession for detail.
                </p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-[7px] lg:gap-[1rem]">
                    <Card 
                        title='Front-End Development' 
                        description="Programming pixel-perfect, responsive client-side apps that are as visually stunning as they are functional." 
                        icon={<RiCodeSSlashLine size={25} color="gray"/>}
                    />
                    <Card 
                        title='Back-End Development' 
                        description="Connecting and enhancing applications by creating tailored APIs to streamline workflows and data exchange." 
                        icon={<BsDatabase size={25} color="gray"/>}
                    />
                    <Card 
                        title='UI & UX Design' 
                        description="Crafting visually appealing, intuitive interfaces that optimize user experience." 
                        icon={<BsWindowFullscreen size={25} 
                        color="gray"/>}
                    />                    
                    <Card 
                        title='Technical Writing' 
                        description="Producing precise, coherent technical documentations that convey complex ideas with clarity." 
                        icon={<TfiWrite size={25} color="gray"/>}
                    />
                </div>
            </div>
        </div>

    )
}

export default About