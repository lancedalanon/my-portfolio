"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import experienceData from '@/constants/experience.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Modal from '@/components/Modal';
import Experience from '@/types/experienceTypes';

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

// Utility function to calculate experience in years and months
const calculateExperience = (startMonth: string, startYear: string, endMonth: string | null, endYear: string | null) => {
    const startDate = new Date(`${startMonth} 1, ${startYear}`);
    
    // Treat the start date as the 1st of the month and the end date as the last day of the month
    let endDate;
    if (endMonth && endYear) {
        // Set endDate to the last day of the end month
        endDate = new Date(Number(endYear), Number(new Date(`${endMonth} 1, ${endYear}`).getMonth()) + 1, 0); 
    } else {
        // If 'Present', use the current date (set to the last day of the current month)
        const today = new Date();
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }

    // Calculate the difference in total months
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth() + 1); 
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Handle cases where year is 0 or month is 0
    if (years === 0) {
        return `${months} months`;
    } else if (months === 0) {
        return `${years} years`;
    } else {
        return `${years} years and ${months} months`;
    }
};

// Main component for Experience section
const ExperienceSection: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();
    const [selectedExperienceId, setSelectedExperienceId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExperienceClick = (id) => {
        setSelectedExperienceId(id);
        setIsModalOpen(true);
        console.log("Selected Experience ID:", id);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <section id="experience" className="px-5 py-14 bg-custom-700">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-100 text-center mb-10">
                MY CAREER HIGHLIGHTS
            </h2>
            {/* Render the appropriate component based on screen size */}
            {isSmallScreen ? 
                <SmallScreenExperience 
                    experience={experienceData} 
                    onExperienceClick={handleExperienceClick} 
                /> : 
                <LargeScreenExperience 
                    experience={experienceData} 
                    onExperienceClick={handleExperienceClick} 
                />
            }

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                className="w-3/4 h-5/6 text-white bg-custom-700"
            >
                
            </Modal>
        </section>
    );
};

interface SmallScreenExperienceProps {
    experience: Experience[];
    onExperienceClick: (id: number) => void;
}

const SmallScreenExperience: React.FC<SmallScreenExperienceProps> = ({ experience, onExperienceClick }) => {
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
                            {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                        </p>
                        {/* More Details Link */}
                        <div
                            className="flex items-center mt-2 text-accent hover:underline hover:cursor-pointer"
                            onClick={() => onExperienceClick(item.id)}
                        >
                            <FaExternalLinkAlt className="mr-1" />
                            <span className="text-md md:text-lg">More Details</span>
                        </div>
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

interface LargeScreenExperienceProps {
    experience: Experience[];
    onExperienceClick: (id: number) => void;
}

const LargeScreenExperience: React.FC<LargeScreenExperienceProps> = ({ experience, onExperienceClick }) => {
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
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                                </p>
                                {/* More Details Link */}
                                <div className="flex items-end justify-end">
                                    <div 
                                        className="flex items-center mt-2 text-accent hover:underline hover:cursor-pointer"
                                        onClick={() => onExperienceClick(item.id)}
                                    >
                                        <FaExternalLinkAlt className="mr-1" />
                                        <span className="text-md md:text-lg">More Details</span>
                                    </div>
                                </div>
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
                            <div className="text-white text-start ml-20">
                                <strong className="text-lg md:text-2xl">{item.role}</strong>
                                <p className="text-md md:text-lg">{item.company_name}</p>
                                <p className="text-md md:text-lg">
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                                </p>
                                {/* More Details Link */}
                                <div 
                                    className="flex items-center mt-2 text-accent hover:underline hover:cursor-pointer"
                                    onClick={() => onExperienceClick(item.id)}
                                >
                                    <FaExternalLinkAlt className="mr-1" />
                                    <span className="text-md md:text-lg">More Details</span>
                                </div>
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
