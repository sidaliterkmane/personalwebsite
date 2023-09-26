"use client"

import React from 'react'

import Button from '../Button'

import { HiOutlineMail } from 'react-icons/hi'

const mailIcon = <HiOutlineMail size={20} color='gray' />

const Hire = () => {
    const email = 'contact@sidaliterkmane.com'

    const handleEmailClick = () => {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
      };

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
                    Looking for a hire ? Tell me about your endeavors.
                </p>
                <Button text='Get in touch' icon={mailIcon} onClick={handleEmailClick}/>
            </div>
        </div>
    )
}

export default Hire