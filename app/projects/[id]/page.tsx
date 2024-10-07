"use client";
import React from "react";
import { useParams } from "next/navigation";
import type { NextPage } from "next";
import projects from "@/constants/projects.json";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Badge from '@/components/Badge';
import DOMPurify from 'dompurify';

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
                    <section className="h-full min-h-screen flex flex-col items-center justify-center bg-custom-700">
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
                    <section className="h-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-custom-700">
                        {/* Centered Content */}
                        <div className="grid grid-cols-1 md:grid-cols-[10%_80%_10%] my-28 mx-6">
                            <div></div>
                                <div>
                                    <Link href="/projects" passHref className="flex items-center my-8 text-2xl">
                                        <FaArrowLeftLong className="mr-2 text-white" />
                                        <span className="text-white hover:underline">
                                            Back to Projects page
                                        </span>
                                    </Link>

                                    {/* Centered Title */}
                                    <h2 className="text-3xl md:text-6xl my-8 font-bold text-custom-100">
                                        {project.project_headline}
                                    </h2>

                                    <em className="text-white text-xl">
                                        {/* Render the project start date */}
                                        Started {project.month_start}, {project.year_start}
                                        
                                        {/* Conditionally render the end date if both `month_end` and `year_end` are not null */}
                                        {project.month_end && project.year_end ? (
                                            <> - Ended {project.month_end}, {project.year_end}</>
                                        ) : null}
                                    </em>

                                    <div className="flex flex-wrap my-8 gap-2 text-white">
                                        {project.language_framework_libraries && project.language_framework_libraries
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
                                                    <span className="text-lg">
                                                        {item.name}
                                                    </span>
                                                </Badge>
                                        ))}
                                        {project.technologies && project.technologies
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
                                                    <span className="text-lg">
                                                        {item.name}
                                                    </span>
                                                </Badge>
                                        ))}
                                    </div>
                                    
                                    {/* Centered Image */}
                                    <Image 
                                        src={project.project_image}
                                        alt={project.project_name}
                                        width={800}
                                        height={800}
                                        className="my-8 rounded-xl w-full"
                                    />

                                    {/* Contents */}
                                    <div className="text-lg text-white">
                                        <em>{project.short_description}</em>

                                        <div>
                                            {/* Iterating over the sections */}
                                            {project.sections && project.sections.map((section) => (
                                                <div key={section.id} className="mb-4"> 
                                                    {/* Subheading */}
                                                    <div className="font-bold text-5xl mt-16 mb-8">{section.subheading}</div>
                                                    
                                                    {/* Content - sanitized using DOMPurify */}
                                                    <div 
                                                        className="text-2xl my-8 leading-relaxed" // Adjusted here
                                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }} 
                                                    />
                                                </div>
                                            ))}
                                        </div>
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

export default Project;
