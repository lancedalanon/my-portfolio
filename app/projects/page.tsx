"use client"
import React from "react";
import Image from 'next/image';
import type { NextPage } from 'next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '@/constants/projects.json';

const Projects: NextPage = () => {
    return (<>
        <main>
            <article>
                <section id="projects" className="flex flex-col items-center justify-start overflow-hidden bg-custom-700">
                    <h2 className="text-3xl md:text-5xl text-center font-bold text-custom-100 mb-10 my-32 mx-6">
                        MASTERPIECES IN DIGITAL DEVELOPMENT
                    </h2>
                    <div className="grid grid-cols-1 mx-8 gap-y-8 md:grid-cols-2 md:gap-x-8 mb-16">
                        {/* Iterate over the featured projects */}
                        {projects.map((project) => (
                            <React.Fragment key={project.id}>
                                <div className="relative group">
                                    <Image
                                        alt={project.project_name}
                                        src={project.project_image}
                                        width={1000}
                                        height={1000}
                                        className="rounded-3xl h-full w-full"
                                    />
                                    <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-between items-start transition-all duration-500 ease-in-out p-6">
                                        {/* Title */}
                                        <span className="text-white text-2xl md:text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                                            <p>{project.project_name}</p>
                                        </span>
                                        {/* Description */}
                                        <span className="text-white text-sm md:text-lg hidden md:block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6">
                                            <p>{project.short_description}</p>
                                        </span>
                                        {/* Button */}
                                        <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 flex justify-between w-full mb-6">
                                            {/* Featured Language/Framework Icons */}
                                            <div className="flex flex-wrap bg-white rounded-full">
                                                {project.language_framework_libraries 
                                                    .filter((item) => item.is_featured === 1) 
                                                    .map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="flex items-center justify-center w-16 h-16"
                                                            title={item.name}
                                                        >
                                                            <Image 
                                                                alt={item.name} 
                                                                src={item.image || '/path/to/default/icon.png'}
                                                                width={40}
                                                                height={40}
                                                                className="pt-2"
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                            <a 
                                                href={`/projects/${project.id}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer" // Security best practice for external links
                                                className="text-white text-lg md:text-2xl rounded-3x px-5 py-3 md:px-10 md:py-5 font-bold flex items-center hover:underline"
                                            >
                                                <FaExternalLinkAlt className="mr-2" /> {/* External link icon */}
                                                Explore
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    </>);
};

export default Projects;
