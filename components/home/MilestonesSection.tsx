"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '@/public/projects.json';
import awards from '@/public/awards.json';
import Button from '@/components/Button';
import { usePathname } from 'next/navigation';
import { Award } from "@/types/awardTypes";
import Spinner from '@/components/Spinner';

const MilestonesSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<Award | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top whenever the pathname change
        window.scrollTo(0, 0);
    }, [pathname]);

    const openModal = (award: Award) => {
        setSelectedImage(award);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('overflow-hidden', 'pointer-events-none');
        } else {
            document.body.classList.remove('overflow-hidden', 'pointer-events-none');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'pointer-events-none');
        };
    }, [selectedImage]);

    return (
        <section id="milestones" className="min-h-screen flex flex-col items-center justify-center bg-custom-800 px-8 py-14">
            {/* Projects */}
            <h2 className="text-4xl md:text-5xl font-bold text-custom-100 text-center mb-10">
                PROJECTS I’VE WORKED ON
            </h2>
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
            
            <div className="border-b-8 border-accent w-1/2 md:w-1/4 h-4 mt-14"></div>

            {/* Awards */}
            <h2 className="text-4xl md:text-5xl font-bold text-custom-100 text-center mt-14 mb-10">
                ACHIEVEMENTS I’VE EARNED
            </h2>
            <div className="grid grid-cols-1 mx-2 mt-8 gap-y-8 md:grid-cols-3 md:gap-x-8">
                {awards
                    .filter(award => award.is_featured === 1)
                    .map((award) => (
                    <React.Fragment key={award.id}>
                        <div className="relative group">
                            <Image
                                alt={`${award.award_name} - Issued in ${award.award_issued_month} ${award.award_issued_year}`}
                                src={award.award_image}
                                width={1000}
                                height={1000}
                                className="rounded-3xl h-64 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-between items-start transition-all duration-500 ease-in-out p-6">
                                <span className="text-fluid-lg md:text-fluid-md text-white font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                    <p>{award.award_name}</p>
                                </span>
                                <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out flex justify-end w-full">
                                    <Button 
                                        className="bg-accent text-white text-fluid-lg md:text-fluid-md rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-8 md:py-3 font-bold flex items-center mt-3"
                                        aria-label={`View details of ${award.award_name}`}
                                        onClick={() => openModal(award)}
                                    >
                                        <FaMagnifyingGlass className="mr-2" />
                                        View Award
                                    </Button>
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link 
                 href="/awards" 
                 passHref
                 className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold mt-6 flex items-center"
                 aria-label="View more awards"
                >
                    <FaExternalLinkAlt className="mr-2" />
                    More Achievements
                </Link>
            </div>

            {/* Modal Overlay */}
            {selectedImage && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75 pointer-events-auto">
                    <div className="relative" onClick={closeModal}>
                        {loading && <Spinner className="max-h-screen w-full p-10 select-none" />}

                        <Image
                            src={selectedImage.award_image || '/images/certificate-template.jpg'}
                            alt={`${selectedImage.award_name} - Issued in ${selectedImage.award_issued_month} ${selectedImage.award_issued_year}`}
                            height={5000}
                            width={5000}
                            className="max-h-screen w-full p-10 select-none"
                            onLoad={() => setLoading(false)} 
                        />
                        <Button
                            className="fixed top-4 right-4 text-6xl text-white font-bold hover:text-gray-300 z-25 select-none"
                            onClick={closeModal}
                        >
                            X
                        </Button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MilestonesSection;