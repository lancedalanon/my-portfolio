"use client"
import React from "react";
import Image from 'next/image';
import type { NextPage } from 'next';
import projects from '@/constants/projects.json';
import { Card, CardFooter, CardBody, CardHeader } from "@/components/Card";
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Badge from '@/components/Badge';

const Projects: NextPage = () => {
    return (<>
        <main>
            <article>
                <section id="projects" className="flex flex-col items-center justify-start overflow-hidden bg-custom-700">
                    <h2 className="text-3xl md:text-5xl text-center font-bold text-custom-100 mt-32 mx-6">
                        MASTERPIECES IN DIGITAL DEVELOPMENT
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 my-16 mx-16 gap-6">
                        {/* Iterate over the featured projects */}
                        {projects.map((project) => (
                            <React.Fragment key={project.id}>
                                <Card className="flex flex-col h-full rounded-3xl bg-custom-600">
                                    <CardHeader>
                                        <Image 
                                            src={project.project_image}
                                            alt={project.project_name}
                                            height={1000}
                                            width={1000}
                                            className="rounded-xl h-72 w-full"
                                        />
                                    </CardHeader>
                                    
                                    {/* CardBody should grow to fill available space */}
                                    <CardBody className="text-white my-4 flex-grow">
                                        <div>
                                            <strong className="text-3xl">
                                                {project.project_name}
                                            </strong>
                                        </div>
                                        <div className="flex flex-wrap gap-4 my-4">
                                            {project.language_framework_libraries
                                                .filter((item) => item.is_featured === 1) 
                                                .map((item) => ( 
                                                    <Badge
                                                        className="py-2 px-3 bg-custom-500 rounded-full"
                                                        key={item.id}
                                                        title={item.name}
                                                    >
                                                        <Image
                                                            src={item.image || '/path/to/default/icon.png'}
                                                            alt={item.name}
                                                            width={25}
                                                            height={25}
                                                            className="mr-2 bg-white rounded-lg"
                                                        />
                                                        <span className="text-lg">
                                                            {item.name}
                                                        </span>
                                                    </Badge>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-lg">
                                                {project.short_description}
                                            </p>
                                        </div>
                                    </CardBody>
                                    
                                    {/* CardFooter stays at the bottom */}
                                    <CardFooter 
                                        className="flex justify-end"
                                    >
                                        <Link 
                                            href={`/projects/${project.id}`} 
                                            target="_blank"
                                            passHref
                                            className="bg-accent text-white text-lg md:text-xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-6 py-4 font-bold flex items-center"
                                        >
                                            <FaExternalLinkAlt className="mr-2" />
                                            Explore Project
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    </>);
};

export default Projects;
