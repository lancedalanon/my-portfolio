"use client"
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const ProjectsSection: React.FC = () => {
    return (
    <section id="projects" className="px-5 py-14">
        <h2 className="text-5xl font-bold text-custom-100 text-center my-4">
            PROJECTS I’VE WORKED ON
        </h2>
        <div className="grid grid-cols-1 mx-2 gap-y-8 md:grid-cols-2 md:gap-x-8">
            {/* iLaya */}
            <div className="relative group hover:cursor-pointer">
                <Image 
                    alt="iLaya"
                    src="/images/iLaya.png" 
                    width={1000}
                    height={1000}
                    className="rounded-3xl h-full w-full"
                />
                <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-start items-start transition-all duration-500 ease-in-out p-6">
                    {/* Title */}
                    <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                        <p>iLaya</p>
                    </span>
                    {/* Description */}
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 hidden md:block">
                        <p>A web-based system for Barangay Aplaya that automates document issuance and manages blotter records, 
                        improving administrative efficiency. iLaya automates the issuance of official documents and manages blotter records, 
                        streamlining administrative processes within the local government unit.</p>
                    </span>
                </div>
            </div>

            {/* Events Tabulation System */}
            <div className="relative group hover:cursor-pointer">
                <Image 
                    alt="Events Tabulation System"
                    src="/images/Events-Tabulation-System.png" 
                    width={1000}
                    height={1000}
                    className="rounded-3xl h-full w-full"
                />
                <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-start items-start transition-all duration-500 ease-in-out p-6">
                    {/* Title */}
                    <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                        <p>Events Tabulation System</p>
                    </span>
                    {/* Description */}
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 hidden md:block">
                        <p>The Events Tabulation System is designed by an Agile team of Project Managers, Analysts, and Developers to 
                            elevate event management. It features live scoring for tournaments with a bracketing system and showcases 
                            overall scores for school organizations. Experience a powerful and intuitive scoring solution that goes 
                            beyond the ordinary!</p>
                    </span>
                </div>
            </div>

            {/* Tourist Management System */}
            <div className="relative group hover:cursor-pointer">
                <Image 
                    alt="Tourist Management System"
                    src="/images/Tourist-Management-Website.png" 
                    width={1000}
                    height={1000}
                    className="rounded-3xl h-full w-full"
                />
                <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-start items-start transition-all duration-500 ease-in-out p-6">
                    {/* Title */}
                    <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                        <p>Tourist Management System</p>
                    </span>
                    {/* Description */}
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 hidden md:block">
                        <p>The Tourist Management System showcases efficient website operations for managing tourism activities, 
                            featuring Intramuros as a highlighted destination. This project was developed to streamline visitor 
                            experiences and enhance engagement with local attractions. Experience seamless navigation and essential 
                            services tailored for travelers!</p>
                    </span>
                </div>
            </div>

            {/* Pixel RPS */}
            <div className="relative group hover:cursor-pointer">
                <Image 
                    alt="PixelRPS"
                    src="/images/Pixel-RPS.png" 
                    width={1000}
                    height={1000}
                    className="rounded-3xl h-full w-full"
                />
                <div className="absolute inset-0 bg-custom-600 bg-opacity-0 group-hover:bg-opacity-90 rounded-3xl flex flex-col justify-start items-start transition-all duration-500 ease-in-out p-6">
                    {/* Title */}
                    <span className="text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:mt-6">
                        <p>Pixel RPS</p>
                    </span>
                    {/* Description */}
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-6 hidden md:block">
                        <p>Pixel RPS is a unique twist on the classic rock-paper-scissors game, incorporating RPG elements. 
                            Players engage in strategic battles, utilizing characters with special abilities. 
                            Experience a fun and interactive gameplay that redefines a beloved classic!</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Button 
                className="bg-accent text-white text-lg md:text-2xl rounded-3xl hover:bg-accent-light active:bg-accent-dark px-5 py-3 md:px-10 md:py-5 font-bold mt-6"
            >
                View More
            </Button>
        </div>

    </section>
    );
};

export default ProjectsSection;
