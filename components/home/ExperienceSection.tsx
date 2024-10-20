"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import experienceData from '@/public/experiences.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Experience from '@/types/experienceTypes';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Function to calculate total experience in years and months
const calculateOverallExperience = () => {
    let totalYears = 0;
    let totalMonths = 0;

    experienceData.forEach(exp => {
        const startDate = new Date(`${exp.month_started} 1, ${exp.year_started}`);
        
        // Determine endDate
        let endDate;
        if (exp.month_ended && exp.year_ended) {
            // Set endDate to the last day of the end month
            endDate = new Date(Number(exp.year_ended), Number(new Date(`${exp.month_ended} 1, ${exp.year_ended}`).getMonth()) + 1, 0);
        } else {
            // If end date is null, use the last day of the current month
            const today = new Date();
            endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        }
        
        // Calculate the difference in total months
        const totalMonthsForExp = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth() + 1);
        const years = Math.floor(totalMonthsForExp / 12);
        const months = totalMonthsForExp % 12;

        totalYears += years;
        totalMonths += months;
    });

    // Convert total months to years if greater than 12
    totalYears += Math.floor(totalMonths / 12);
    totalMonths = totalMonths % 12;

    return { totalYears, totalMonths };
};

const ExperienceSection: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [totalMonths, setTotalMonths] = useState(0);
    const [totalYears, setTotalYears] = useState(0);

    // Calculate experience when the component mounts
    useEffect(() => {
        const { totalYears, totalMonths } = calculateOverallExperience();
        setTotalYears(totalYears); 
        setTotalMonths(totalMonths);
    }, []);

    return (
        <section ref={ref} id="experience" className="min-h-screen flex flex-col items-center justify-center px-8 py-14 bg-custom-700">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-100 text-center mb-10">
                {totalYears > 0 ? `${totalYears} YEAR${totalYears > 1 ? 'S ' : ' '} AND ` : ''}
                {totalMonths > 0 ? `${totalMonths} MONTH${totalMonths > 1 ? 'S ' : ' '}` : ''}
                OF EXPERTISE & IMPACT
            </h2>
            {isSmallScreen ? 
                <SmallScreenExperience 
                    experience={experienceData} 
                    inView={inView}
                /> : 
                <LargeScreenExperience 
                    experience={experienceData} 
                    inView={inView}
                />
            }
        </section>
    );
};

interface SmallScreenExperienceProps {
    experience: Experience[];
    inView: boolean;
}

const SmallScreenExperience: React.FC<SmallScreenExperienceProps> = ({ experience, inView }) => {
    return (
        <div className="grid grid-cols-[1.5%_99.5%] place-items-center ml-10">
            <div className="h-8 w-8 rounded-full bg-custom-300"></div>
            <div></div>

            {experience.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="h-32 w-2 bg-custom-300"></div>
                    <div></div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20, rotate: -180 }} 
                        animate={inView && { opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="h-20 w-20">
                        <Image
                            src={item.image}
                            alt={`Profile image for ${item.label}`}
                            className="rounded-full border-2 border-custom-100"
                            height={100}
                            width={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView && { opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="text-white text-start ml-14"
                    >
                        <strong className="text-md">{item.role}</strong>
                        <p className="text-sm">{item.company_name}</p>
                        <p className="text-sm">
                            {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                        </p>
                        <Link 
                            href={`/experiences/${item.slug}`} 
                            passHref
                        >
                            <div
                                className="flex items-center mt-2 text-accent hover:underline cursor-pointer"
                                aria-label={`View more details about ${item.role} at ${item.company_name}`}
                            >
                                <FaExternalLinkAlt className="mr-1" />
                                <span className="text-md md:text-lg">More Details</span>
                            </div>
                        </Link>
                    </motion.div>

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
    inView: boolean;
}

const LargeScreenExperience: React.FC<LargeScreenExperienceProps> = ({ experience, inView }) => {
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

                    {index % 2 === 0 ? (
                        <>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView && { opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-white text-end mr-20"
                            >
                                <strong className="text-lg md:text-2xl">{item.role}</strong>
                                <p className="text-md md:text-lg">{item.company_name}</p>
                                <p className="text-md md:text-lg">
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                                </p>
                                <div
                                    className="flex items-end justify-end">
                                        <Link 
                                            href={`/experiences/${item.slug}`} 
                                            passHref
                                        >
                                            <div 
                                                className="flex items-center mt-2 text-accent hover:underline cursor-pointer"
                                                aria-label={`View more details about ${item.role} at ${item.company_name}`}
                                            >
                                                <FaExternalLinkAlt className="mr-1" />
                                                <span className="text-md md:text-lg">More Details</span>
                                            </div>
                                        </Link>
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20, rotate: 180 }} 
                                animate={inView && { opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative h-32 w-32"
                            >
                                <Image
                                    src={item.image}
                                    alt={`Profile image for ${item.label}`}
                                    className="rounded-full border-2 border-custom-100"
                                    height={200}
                                    width={200}
                                />
                            </motion.div>
                            <div></div>
                        </>
                    ) : (
                        <>
                            <div></div>
                            <motion.div
                                initial={{ opacity: 0, x: -20, rotate: -180 }} 
                                animate={inView && { opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.5 }} 
                                className="relative h-32 w-32"
                            >
                                <Image
                                    src={item.image}
                                    alt={`Profile image for ${item.label}`}
                                    className="rounded-full border-2 border-custom-100"
                                    height={200}
                                    width={200}
                                />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView && { opacity: 1, x: 0 }} 
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-white text-start ml-20"
                            >
                                <strong className="text-lg md:text-2xl">{item.role}</strong>
                                <p className="text-md md:text-lg">{item.company_name}</p>
                                <p className="text-md md:text-lg">
                                    {item.month_started} {item.year_started} - {item.month_ended ? `${item.month_ended} ${item.year_ended}` : 'Present'} • {calculateExperience(item.month_started, item.year_started, item.month_ended, item.year_ended)}
                                </p>
                                <div className="flex items-start justify-start">
                                    <Link 
                                        href={`/experiences/${item.slug}`} 
                                        passHref
                                    >
                                        <div 
                                            className="flex items-center mt-2 text-accent hover:underline cursor-pointer"
                                            aria-label={`View more details about ${item.role} at ${item.company_name}`}
                                        >
                                            <FaExternalLinkAlt className="mr-1" />
                                            <span className="text-md md:text-lg">More Details</span>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
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
