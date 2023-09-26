"use client"

import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

import { motion } from 'framer-motion'

import { useState } from 'react'

const Navbar = () => {
    const email = 'contact@sidaliterkmane.com'

    const handleEmailClick = () => {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };

    const links = [
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/sid-ali-terkmane-8334a71b4/', icon: <FaLinkedin size={20} color='gray' /> },
        { name: 'Github', link: 'https://github.com/sidaliterkmane', icon: <FaGithub size={20} color='gray' /> },
        { name: 'Twitter', link: 'https://twitter.com/sidterkmane', icon: <FaTwitter size={20} color='gray' /> }
    ]

    return (
        <nav className="h-[100px] w-full px-[1rem] flex justify-center">
            <div className="
                w-[1200px]
                h-full
                border-b-[1px]
                border-gray-400
                border-opacity-10
                flex
                flex-row
                justify-between
                items-center
                px-[1rem]
            ">
                <button className='
                            h-[40px]
                            flex
                            gap-2
                            p-3
                            justify-center
                            items-center
                            bg-[#1a1a1a]
                            rounded
                            border-[1px]
                            border-gray-400
                            text-gray-400
                            font-light
                            text-sm
                            transition
                            border-opacity-10
                            hover:bg-[#282828]
                        ' onClick={handleEmailClick}>
                    <HiOutlineMail size={20} color='gray' />
                    Get in touch
                </button>
                <div>
                    <ul className="flex gap-5 justify-center items-center">
                        {links.map((link) =>
                            <li>
                                <a href={link.link} target='_blank' className="
                                ">
                                    <span className="hidden sm:inline-block text-gray-400
                                    font-light
                                    text-sm
                                    transition
                                    hover:text-gray-300">{link.name}</span>
                                    <span className="inline-block sm:hidden">{link.icon}</span>
                                </a>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar