"use client"

import { useState } from "react";
import Image from "next/image";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { motion } from 'framer-motion';

import './Projects.css'

import ProjectCard from "./ProjectCard"
import Filter from "./Filter";
import excelerate1 from '../../../public/images/excelerate/excelerate1.png';
import aemudm from '../../../public/images/aemudm.png'
import spotilist from '../../../public/images/spotilist.png'
import workflow from '../../../public/images/workflow.png'

import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import * as techImages from '../../techImages'

const projects = [
    <ProjectCard
        key="1"
        image={excelerate1}
        title="Excelerate Services"
        description="Front-end React application for a digital marketing agency. Inspired by Vercel."
        demoLink="https://excelerateservices.com/"
        codeLink=""
        category="Front-End"
    />,
    <ProjectCard
        key="2"
        image={aemudm}
        title="UdeM's MSA"
        description="Front-end React application for Montreal's University's MSA."
        demoLink="https://aemudm.ca"
        codeLink="https://github.com/aemudm/aemudm-2023"
        category="Front-End"
    />,
    <ProjectCard
        key="3"
        image={spotilist}
        title="Playlist Creator App"
        description="Front-end React application featuring playlist creation using the Spotify API."
        demoLink="https://github.com/sidaliterkmane/playlist-creator-app"
        codeLink="https://github.com/sidaliterkmane/playlist-creator-app"
        category="Front-End"
    />,
    <ProjectCard
        key="4"
        image={workflow}
        title="Workflow"
        description="Full-stack NextJS application featuring serverless components and OAuth."
        demoLink="https://github.com/sidaliterkmane/workflow"
        codeLink="https://github.com/sidaliterkmane/workflow"
        category="Full-Stack"
    />,
]

const categories = ['Front-End', 'Full-Stack', 'UI & UX', 'Other', 'All']

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects)

    const handleFilter = (category: string) => {
        if (category === 'All') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(
                projects.filter(
                    (project) => project.props['category'] === category
                )
            )
        }
    }

    return (
        <div className="w-full px-[1rem] flex justify-center" id="projects">
            <div className="
            w-[1200px]
            flex
            flex-col
            items-center
            gap-[4rem]
            px-[1rem]
            pb-[100px] 
            border-b-[1px]
            border-gray-400
            border-opacity-10
            ">
                {/*<p className="
                    max-w-[600px]
                    text-2xl
                    text-center
                    font-light
                    gradient
                    sm:text-[35px]
                    leading-none
                    pb-[5px]
                ">
                    Captivating projects that highlight a unique combination of technical expertise, design prowess, and problem-solving abilities.
                </p>*/}

                <div className="projects-container w-full relative flex items-center justify-center flex-col gap-[2rem]">
                    <div className="
                        coming-soon
                        w-full
                        h-[107%]
                        z-20
                        backdrop-blur
                        absolute
                        flex
                        justify-center
                        items-center
                    ">
                        <p className="
                    max-w-[600px]
                    text-2xl
                    text-center
                    font-light
                    gradient
                    sm:text-[35px]
                    leading-none
                    pb-[5px]
                ">
                            Captivating projects that highlight a unique combination of technical expertise, design prowess, and problem-solving abilities. Coming soon.
                        </p>
                    </div>

                    {/* Actual elements to display once all projects are done*/}
                    <div className="
                    w-[95%]
                    h-[250px]
                    bg-[#1a1a1a]
                    border-[1px]
                    border-gray-400
                    border-opacity-10
                    hidden
                    md:flex
                    relative
                ">
                        <div className="
                        h-full
                        w-[50%]
                        relative
                        overflow-hidden
                        border-r-[1px]
                        border-gray-400
                        border-opacity-10
                    ">
                            <div className="
                        h-full
                        w-full
                        absolute
                        overflow-hidden
                    ">
                                <Image src={excelerate1} alt="" className="absolute object-cover" />
                            </div>
                        </div>

                        <div className="
                        h-full
                        w-[50%]
                        flex
                        flex-col
                        relative
                    ">
                            <div className="
                            box-border
                            p-[2rem]
                        ">
                                <p className="
                            box-border
                            border-[1px]
                            border-gray-400
                            border-opacity-10
                            rounded
                            p-[5px]
                            w-[68px]
                            font-light
                            text-sm
                            mb-[1rem]
                            bg-[#282828]
                        ">
                                    Featured
                                </p>
                                <p className="
                            gradient
                            text-2xl
                        ">
                                    Excelerate Services
                                </p>
                                <p className="
                            mt-[10px]
                            text-md
                            font-light
                        ">
                                    Full front-end React application for Excelerate Services,
                                    a digital marketing agency. Inspired by Vercel.
                                </p>
                                <div className="
                        
                        ">

                                </div>

                            </div>

                            <a href='https://excelerateservices.com'
                                target='_blank'
                                className="
                            absolute
                            bottom-[0px]
                            border-t-[1px]
                            border-gray-400
                            border-opacity-10
                            w-full
                            h-[40px]
                            box-border
                            p-[1rem]
                            flex
                            justify-center
                            items-center
                            gap-[10px]
                            font-light
                            transition
                            hover:bg-[#181818]
                            cursor-pointer 
                        ">
                                Live demo <FiExternalLink size={18} color="gray" />
                            </a>

                        </div>
                    </div>

                    <div className="all flex flex-col gap-[2rem] items-center">
                        <div className="w-[95%] flex justify-center md:justify-between items-center">
                            <p className="gradient hidden md:block">
                                All projects
                            </p>
                            <Filter
                                categories={categories}
                                onFilter={handleFilter}
                            />
                        </div>


                        <TransitionGroup
                            className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[7px] lg:gap-[1rem]"
                            component="div"
                        >
                            {filteredProjects.map((project) => (
                                <CSSTransition
                                    key={project.key}
                                    timeout={500}
                                    classNames="project-transition"
                                >
                                    {project}
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects