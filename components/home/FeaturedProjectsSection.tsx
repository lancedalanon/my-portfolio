"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '@/constants/projects.json';

const FeaturedProjectsSection: React.FC = () => {
    return (
        <section id="featured-projects" className="bg-custom-800 px-5 py-14">
            <h2 className="text-5xl font-bold text-custom-100 text-center mb-10">
                PROJECTS I’VE WORKED ON
            </h2>
            <div className="grid grid-cols-1 mx-2 gap-y-8 md:grid-cols-2 md:gap-x-8">
                {/* Iterate over the featured projects */}
                {projects.filter(project => project.is_featured === 1).map((project) => (
                    <React.Fragment key={project.id}>
                        <div className="relative group hover:cursor-pointer">
                            <Image
                                alt={project.project_name}
                                src={project.project_image}
                                width={1000}
                                height={1000}
                                className="rounded-3xl h-full w-full"
                            />
                            <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-between items-start transition-all duration-500 ease-in-out p-6">
                                {/* Title */}
                                <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                                    <p>{project.project_name}</p>
                                </span>
                                {/* Description */}
                                <span className="text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 hidden md:block">
                                    <p>{project.short_description}</p>
                                </span>
                                {/* Button */}
                                <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 flex justify-end w-full">
                                    <Link 
                                        href={`/projects/${project.id}`} 
                                        target="_blank"
                                        passHref
                                        className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold flex items-center"
                                    >
                                        <FaExternalLinkAlt className="mr-2" />
                                        More Details
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link 
                 href="/projects" 
                 passHref
                 className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold mt-6 flex items-center"
                >
                    <FaExternalLinkAlt className="mr-2" />
                    View More
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;