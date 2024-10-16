"use client"

import React, { useState, useEffect, useMemo } from "react";
import Image from 'next/image';
import type { NextPage } from 'next';
import { Card, CardFooter, CardBody, CardHeader } from "@/components/Card";
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Badge from '@/components/Badge';
import Metadata from "@/components/Metadata";
import { usePathname } from 'next/navigation';
import type { Project } from "@/types/projectTypes";
import Spinner from "@/components/Spinner";

const Projects: NextPage = () => {
    const pathname = usePathname();
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchProjectsData = async () => {
            const response = await fetch('/projects.json');
            const data = await response.json();
            setProjectsData(data);
            setLoading(false);
        };

        fetchProjectsData();
    }, []);

    const description = "Welcome to the portfolio of Lance Orville Dalanon, a dedicated Full-Stack Software Engineer with a passion for crafting robust and scalable web applications. Explore my diverse projects that showcase my skills in front-end and back-end development, including innovative solutions built with the latest technologies. Whether you're looking for inspiration or interested in collaborating, this portfolio highlights my commitment to excellence in web development and user experience.";
    
    const projectCard = useMemo(() => {
        return projectsData.map((project: Project) => (
            <React.Fragment key={project.id}>
                <Card className="flex flex-col h-full rounded-3xl bg-custom-700">
                    <CardHeader>
                        <Image 
                            src={project.project_image}
                            alt={project.project_name}
                            height={1000}
                            width={1000}
                            className="h-48 md:h-96 w-full"
                        />
                    </CardHeader>
                    
                    {/* CardBody should grow to fill available space */}
                    <CardBody className="px-4 text-white my-4 flex-grow">
                        <h2>
                            <strong className="text-2xl md:text-3xl">
                                {project.project_name}
                            </strong>
                        </h2>
                        <div className="flex flex-wrap gap-4 my-4">
                            {project.language_framework_libraries
                                .filter((item) => item.is_featured === 1) 
                                .map((item) => ( 
                                    <Badge
                                        className="flex py-1 px-2 md:py-2 md:px-3 bg-custom-600 rounded-full"
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
                        <div className="hidden md:block">
                            <p className="text-lg">
                                {project.short_description}
                            </p>
                        </div>
                    </CardBody>
                    
                    {/* CardFooter stays at the bottom */}
                    <CardFooter 
                        className="flex justify-end p-4"
                    >
                        <Link 
                            href={`/projects/${project.slug}`} 
                            passHref
                            className="bg-accent text-white text-md md:text-xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-4 py-3 md:px-6 md:py-4 font-bold flex items-center"
                            aria-label="Explore this project"
                        >
                            <FaExternalLinkAlt className="mr-2" />
                            Explore Project
                        </Link>
                    </CardFooter>
                </Card>
            </React.Fragment>
        ));
    }, [projectsData]);

    return (<>
        <Metadata description={description} />
        <main>
            <article>
                <section id="projects" className="min-h-screen flex flex-col items-center justify-start overflow-hidden bg-custom-800 md:px-14">
                    <header>
                        <h1 className="text-3xl md:text-5xl text-center font-bold text-custom-100 mt-32 mx-6 uppercase">
                            Masterpieces in Digital Development
                        </h1>
                    </header>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 my-16 mx-8 md:mx-16 gap-6">
                            {projectCard}
                        </div>
                    )}
                </section>
            </article>
        </main>
    </>);
};

export default Projects;
