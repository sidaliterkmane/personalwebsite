"use client"

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {

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
                flex
                flex-row
                justify-between
                items-center
                px-[1rem]
            ">
                <p className='font-light text-sm'>
                    © 2023 All rights reserved.
                </p>
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

export default Footer