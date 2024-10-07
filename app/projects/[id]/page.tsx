"use client";
import React from "react";
import { useParams } from "next/navigation";  // Import useParams hook from next/navigation
import type { NextPage } from "next";
import projects from "@/constants/projects.json";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

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
                        <div className="grid grid-cols-1 md:grid-cols-[10%_80%_10%] my-28">
                            <div></div>
                                <div className="mx-auto">
                                    <Link href="/projects" passHref className="flex items-center my-8">
                                        <FaArrowLeftLong className="mr-2 text-white text-lg" />
                                        <span className="text-white text-lg hover:underline">
                                            Back to Projects page
                                        </span>
                                    </Link>

                                    {/* Centered Title */}
                                    <h2 className="text-3xl md:text-5xl my-8 uppercase font-bold text-custom-100">
                                        {project.project_headline}
                                    </h2>
                                    
                                    {/* Centered Image */}
                                    <Image 
                                        src={project.project_image}
                                        alt={project.project_name}
                                        width={800}
                                        height={800}
                                        className="my-8 rounded-xl w-full max-w-[1000px] mx-auto"
                                    />

                                    {/* Contents */}
                                    <div className="text-lg text-white p-4">
                                        <em>{project.short_description}</em>
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
