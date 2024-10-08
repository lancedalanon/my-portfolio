"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import type { NextPage } from "next";
import projects from "@/constants/projects.json";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Badge from '@/components/Badge';
import DOMPurify from 'isomorphic-dompurify';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '@/types/projectTypes';

interface ProjectGridProps {
    projects: Project[];
    projectId: number; 
}

const Project: NextPage = () => {
    // Get the params from the URL, including the 'id'
    const params = useParams();
    const projectId = Number(params?.id);  // Get 'id' from params and convert it to a number

    // Find the project in the projects.json array by the id
    const project = projects.find((project) => project.id === projectId);

    // If the project isn't found, we can return a fallback UI (e.g., "Not Found")
    if (!project) {
        return (
            <main>
                <article>
                    <section className="h-full min-h-screen flex flex-col items-center justify-center bg-custom-800">
                        <div className="text-center">
                            {/* Center the 404 message */}
                            <h2 className="text-7xl font-bold text-custom-100 mb-6">
                                404
                            </h2>
                            <h2 className="text-4xl md:text-7xl font-bold text-custom-100">
                                Project Not Found
                            </h2>
                        </div>

                        {/* Add the link below the message */}
                        <div className="mt-8">
                            <Link href="/projects" passHref className="flex justify-center">
                                <div className="flex items-center">
                                    <FaArrowLeftLong className="mr-2 text-white text-lg" />
                                    <span className="text-white text-lg hover:underline">
                                        Back to Projects page
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </section>
                </article>
            </main>
        );
    }

    // Render the project that matches the ID
    return (
        <>
            <main>
                <article>
                    <section className="h-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-custom-800">
                        {/* Centered Content */}
                        <div className="grid grid-cols-1 md:grid-cols-[10%_80%_10%] my-28 mx-6">
                            <div></div>
                                <div>
                                    <Link href="/projects" passHref className="flex items-center my-8 text-xl md:text-2xl">
                                        <FaArrowLeftLong className="mr-2 text-white" />
                                        <span className="text-white hover:underline">
                                            Back to Projects page
                                        </span>
                                    </Link>

                                    {/* Centered Title */}
                                    <h2 className="text-3xl md:text-6xl my-8 font-bold text-custom-100">
                                        {project.project_headline}
                                    </h2>

                                    <em className="text-white text-lg md:text-xl">
                                        {/* Render the project start date */}
                                        Started {project.month_start} {project.year_start}
                                        
                                        {/* Conditionally render the end date if both `month_end` and `year_end` are not null */}
                                        {project.month_end && project.year_end ? (
                                            <> - Ended {project.month_end} {project.year_end}</>
                                        ) : null}
                                    </em>

                                    <div className="flex flex-wrap my-8 gap-2 text-white">
                                        {project.language_framework_libraries && project.language_framework_libraries
                                            .map((item) => ( 
                                                <Badge
                                                    className="flex py-1 px-2 md:py-2 md:px-3 bg-custom-700 rounded-full"
                                                    key={item.id}
                                                    title={item.name}
                                                >
                                                    <div className="bg-white rounded-full p-1 mr-2">
                                                        <Image
                                                            src={item.image || '/path/to/default/icon.png'}
                                                            alt={item.name}
                                                            width={20}
                                                            height={20}
                                                            className="rounded-lg"
                                                        />
                                                    </div>
                                                    <span className="text-sm md:text-lg">
                                                        {item.name}
                                                    </span>
                                                </Badge>
                                        ))}
                                        {project.technologies && project.technologies
                                            .map((item) => ( 
                                                <Badge
                                                    className="flex py-1 px-2 md:py-2 md:px-3 bg-custom-700 rounded-full"
                                                    key={item.id}
                                                    title={item.name}
                                                >
                                                    <div className="bg-white rounded-full p-1 mr-2">
                                                        <Image
                                                            src={item.image || '/path/to/default/icon.png'}
                                                            alt={item.name}
                                                            width={20}
                                                            height={20}
                                                            className="rounded-lg"
                                                        />
                                                    </div>
                                                    <span className="text-sm md:text-lg">
                                                        {item.name}
                                                    </span>
                                                </Badge>
                                        ))}
                                    </div>
                                    
                                    {/* Centered Image with Caption */}
                                    <figure className="text-center">
                                        <Image 
                                            src={project.project_image}
                                            alt={project.project_name}
                                            width={800}
                                            height={800}
                                            className="rounded-xl w-full"
                                        />
                                        <figcaption className="text-md md:text-lg text-white mt-4">
                                            <em>{project.short_description}</em>
                                        </figcaption>
                                    </figure>

                                    {/* Contents */}
                                    <div className="text-xl text-white">
                                        <div>
                                            {/* Iterating over the sections */}
                                            {project.sections && project.sections.map((section) => (
                                                <div key={section.id}> 
                                                    {/* Subheading */}
                                                    <div className="font-bold text-3xl md:text-5xl mt-8 mb-4 md:mt-16 md:mb-8">{section.subheading}</div>
                                                    
                                                    {/* Content - sanitized using DOMPurify */}
                                                    <div 
                                                        className="text-lg md:text-2xl my-4 md:my-8 leading-loose"
                                                        dangerouslySetInnerHTML={{
                                                            __html: DOMPurify.sanitize(section.content),
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t-2 border-custom-600 pt-16 text-white">
                                        <div className="text-3xl md:text-5xl mb-8">
                                            <strong>
                                                More Projects
                                            </strong>
                                        </div>
                                        <ProjectGrid projects={projects} projectId={projectId} />
                                    </div>
                                </div>
                            <div></div>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, projectId }) => {
    const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]); 

    useEffect(() => {
        // Only shuffle projects on the client-side
        const shuffled = [...projects]
            .sort(() => 0.5 - Math.random())  // Shuffle the projects
            .filter(project => project.id !== projectId)  // Exclude the current project
            .slice(0, 4);  // Limit to 4 projects

        setShuffledProjects(shuffled);  // Set the shuffled projects in state
    }, [projects, projectId]);  // Run effect when projects or projectId changes

    return (
        <div className="grid grid-cols-1 mx-2 mt-8 gap-y-8 md:grid-cols-2 md:gap-x-8">
            {shuffledProjects.map((project) => (
                <React.Fragment key={project.id}>
                    <div className="relative group">
                    <Image
                        alt={project.project_name}
                        src={project.project_image}
                        width={1000}
                        height={1000}
                        className="rounded-3xl h-64 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-between items-start transition-all duration-500 ease-in-out p-6">
                        {/* Title */}
                        <span className="text-white text-3xl md:text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                            <p>{project.project_name}</p>
                        </span>
                        {/* Button */}
                        <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 flex justify-end w-full">
                            <Link 
                                href={`/projects/${project.id}`} 
                                passHref
                                className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold flex items-center"
                            >
                                <FaExternalLinkAlt className="mr-2" />
                                Explore Project
                            </Link>
                        </span>
                    </div>
                </div>
</React.Fragment>
            ))}
        </div>
    );
};

export default Project;
