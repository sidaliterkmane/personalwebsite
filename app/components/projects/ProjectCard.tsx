"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

interface CardProps {
  title: string,
  description: string,
  image: any,
  demoLink: string,
  codeLink: string,
  category: string
}

const ProjectCard: React.FC<CardProps> = ({ title, description, image, demoLink, codeLink, category}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = image.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / image.offsetWidth) * 70;
      const y = ((e.clientY - rect.top) / image.offsetHeight) * 70;

      image.style.transformOrigin = `${x}% ${y}%`;
    };

    image.addEventListener('mousemove', handleMouseMove);

    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div layout className="h-[300px] md:h-[400px] bg-[#1a1a1a] border-[1px] border-gray-400 border-opacity-10 flex flex-col">
      <div className="w-full h-[550px] relative overflow-hidden border-b-[1px] border-gray-400 border-opacity-10">
        <div
          ref={imageRef}
          className="w-[105%] h-full absolute overflow-hidden transition duration-700 ease-in-out"
          // onMouseEnter={() => imageRef.current && (imageRef.current.style.transform = 'scale(1.3)')}
          // onMouseLeave={() => imageRef.current && (imageRef.current.style.transform = 'scale(1)')}
        >
          <Image src={image} alt={title} className="absolute object-cover" />
        </div>
      </div>

      <div className="w-full h-full box-border p-[1rem] flex flex-col gap-[7px]">
        <p className='gradient text-lg'>{title}</p>
        <div className='box-border p-[3px] border-[1px] border-gray-400 border-opacity-10 rounded w-[80px] flex justify-center bg-[#282828]'>
          <p className='text-xs font-light'>{category}</p>
        </div>
        <p className="font-light text-sm">{description}</p>
      </div>
      <div className="
        w-full 
        h-[130px] 
        border-t-[1px] 
        border-gray-400 
        border-opacity-10 
        grid grid-cols-2 
        font-light
        ">
        <button className="
            border-r-[1px] 
            border-gray-400 
            border-opacity-10 
            transition 
            hover:bg-[#181818] 
            ">
          <a href={demoLink} target='_blank' className='
              text-sm font-light 
              flex justify-center 
              items-center 
              gap-[10px]
              '>
            Live demo <FiExternalLink size={18} color="gray" />
          </a>
        </button>
        <button className="
            transition 
            hover:bg-[#181818] 
            flex justify-center 
            items-center
            ">
          <a href={codeLink} target='_blank' className='
              text-sm 
              font-light 
              flex 
              justify-center 
              items-center 
              gap-[10px]
              '>
            Code <AiFillGithub size={20} color="gray" />
          </a>
        </button>
      </div>
    </motion.div>
  )
}

export default ProjectCard