"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import experienceData from '@/constants/experience.json';

// Custom hook to determine if the screen size is small
const useIsSmallScreen = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const updateIsSmall = () => {
            if (typeof window !== 'undefined') {
                setIsSmall(window.innerWidth < 640); // Tailwind's sm breakpoint
            }
        };

        updateIsSmall(); // Set initial value
        window.addEventListener('resize', updateIsSmall); // Add resize event listener

        return () => window.removeEventListener('resize', updateIsSmall); // Clean up listener
    }, []);

    return isSmall;
};

// Main component for Experience section
const ExperienceSection: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <section id="experience" className="px-5 py-14 bg-custom-700">
            <h2 className="text-5xl font-bold text-custom-100 text-center mb-10">
                EXPERIENCE
            </h2>
            {/* Render the appropriate component based on screen size */}
            {isSmallScreen ? <SmallScreenExperience experience={experienceData} /> : <LargeScreenExperience experience={experienceData} />}
        </section>
    );
};

// Component for small screen experience layout
const SmallScreenExperience: React.FC<{ experience: typeof experienceData }> = ({ experience }) => {
    return (
        <div className="grid grid-cols-[1.5%_99.5%] place-items-center ml-10">
            <div className="h-8 w-8 rounded-full bg-custom-300"></div>
            <div></div>

            {experience.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="h-32 w-2 bg-custom-300"></div>
                    <div></div>

                    <div className="h-20 w-20">
                        <Image
                            src={item.image}
                            alt={item.label}
                            className="rounded-full border-2 border-custom-100"
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="text-white text-start ml-14">
                        <strong className="text-md">{item.role}</strong>
                        <p className="text-sm">{item.company_name}</p>
                        <p className="text-sm">
                            {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} 
                        </p>
                    </div>

                    <div className="h-32 w-2 bg-custom-300"></div>
                    <div></div>
                </React.Fragment>
            ))}
            
            <div className="h-8 w-8 rounded-full bg-custom-300"></div>
            <div></div>
        </div>
    );
};

// Component for large screen experience layout
const LargeScreenExperience: React.FC<{ experience: typeof experienceData }> = ({ experience }) => {
    return (
        <div className="grid grid-cols-[48.5%_1%_48.5%] place-items-center">
            <div></div>
                <div className="h-8 w-8 rounded-full bg-custom-300"></div>
            <div></div>
            {experience.map((item, index) => (
                <React.Fragment key={item.id}>
                    <div></div>
                    <div className="h-32 w-2 bg-custom-300"></div>
                    <div></div>

                    {/* Conditional rendering to alternate text position */}
                    {index % 2 === 0 ? (
                        // Left aligned for even index
                        <>
                            <div className="text-white text-end mr-20">
                                <strong className="text-lg md:text-2xl">{item.role}</strong>
                                <p className="text-md md:text-lg">{item.company_name}</p>
                                <p className="text-md md:text-lg">
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} 
                                </p>
                            </div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    className="rounded-full border-2 border-custom-100"
                                    height={200}
                                    width={200}
                                />
                            </div>
                            <div></div>
                        </>
                    ) : (
                        // Right aligned for odd index
                        <>
                            <div></div>
                            <div className="relative h-32 w-32">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    className="rounded-full border-2 border-custom-100"
                                    height={200}
                                    width={200}
                                />
                            </div>
                            <div className="text-white text-start mr-20">
                                <strong className="text-lg md:text-2xl">{item.role}</strong>
                                <p className="text-md md:text-lg">{item.company_name}</p>
                                <p className="text-md md:text-lg">
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} 
                                </p>
                            </div>
                        </>
                    )}
                    <div></div>
                    <div className="h-32 w-2 bg-custom-300"></div>
                    <div></div>
                </React.Fragment>
            ))}
            <div></div>
            <div className="h-8 w-8 rounded-full bg-custom-300"></div>
            <div></div>
        </div>
    );
};

export default ExperienceSection;
