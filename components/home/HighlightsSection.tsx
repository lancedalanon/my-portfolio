"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '@/constants/projects.json';

const HighlightsSection: React.FC = () => {
    return (
        <section id="highlights" className="bg-custom-800 px-5 py-14">
            <header>
                <h2 className="text-4xl md:text-5xl font-bold text-custom-100 text-center mb-10">
                    PROJECTS I’VE WORKED ON
                </h2>
            </header>
            <div className="grid grid-cols-1 mx-2 mt-8 gap-y-8 md:grid-cols-2 md:gap-x-8">
                {projects
                    .filter(project => project.is_featured === 1)
                    .map((project) => (
                    <React.Fragment key={project.id}>
                        <div className="relative group">
                            <Image
                                alt={`Screenshot of ${project.project_name}`}
                                src={project.project_image}
                                width={1000}
                                height={1000}
                                className="rounded-3xl h-64 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-between items-start transition-all duration-500 ease-in-out p-6">
                                <span className="text-white text-3xl md:text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                                    <p>{project.project_name}</p>
                                </span>
                                <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 flex justify-end w-full">
                                    <Link 
                                        href={`/projects/${project.slug}`}
                                        passHref
                                        className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold flex items-center"
                                        aria-label={`View details of ${project.project_name}`}
                                    >
                                        <FaMagnifyingGlass className="mr-2" />
                                        View Project
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
                 aria-label="View more projects"
                >
                    <FaExternalLinkAlt className="mr-2" />
                    More Projects
                </Link>
            </div>
        </section>
    );
};

export default HighlightsSection;