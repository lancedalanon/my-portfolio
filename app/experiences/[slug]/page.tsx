"use client";
import React, { useEffect } from 'react';
import Metadata from "@/components/Metadata";
import Image from 'next/image';
import experiences from "@/constants/experience.json";
import { useParams } from "next/navigation";
import Experience from "@/types/experienceTypes"; 
import Badge from '@/components/Badge';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from 'next/navigation';

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

const ExperiencePage: React.FC = () => {
    const description = "Explore Lance Orville Dalanon's awards and certifications, highlighting achievements in software engineering and dedication to excellence in web development.";

    // Get the slug parameter from the URL
    const { slug } = useParams() as { slug: string };

    // Find the experience in the experiences.json array by the slug
    const experience = experiences.find((exp: Experience) => exp.slug === slug);

    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top whenever the pathname change
        window.scrollTo(0, 0);
    }, [pathname]);

    // Optionally, you can add error handling if the experience is not found
    if (!experience) {
        return (<>
            <Metadata description={description} />
            <main>
                <article>
                    <section className="h-full min-h-screen flex flex-col items-center justify-center bg-custom-800">
                        <div className="text-center">
                            <header>
                                <h1 className="text-7xl font-bold text-custom-100 mb-6">404</h1>
                            </header>
                            <h2 className="text-4xl md:text-7xl font-bold text-custom-100">Not Found</h2>
                        </div>
                        <div className="mt-8">
                            <Link href="/#experience" passHref className="flex justify-center">
                                <div className="flex items-center">
                                    <FaArrowLeftLong className="mr-2 text-white text-lg" />
                                    <span className="text-white text-lg hover:underline">Back to Experience section</span>
                                </div>
                            </Link>
                        </div>
                    </section>
                </article>
            </main>
        </>);
    }

    return (
        <>
            <Metadata description={description} />
            <main>
                <article>
                    <section className="grid grid-cols-1 md:grid-cols-[30%_auto] bg-custom-800 min-h-screen text-white pt-20 pb-10 px-10 md:px-20">
                        {/* Left Column (Mobile: becomes full-width, Center aligned) */}
                        <div className="flex flex-col justify-center items-center text-center p-4">
                            <Image 
                                src={experience.image} 
                                alt={experience.label} 
                                width={128} 
                                height={128} 
                                className="rounded-full mb-4" 
                            />
                            <header>
                                <h1 className="text-2xl md:text-3xl font-bold break-all mb-4">{experience.label}</h1>
                            </header>
                            <p className="text-md md:text-lg break-words">{experience.role}</p>
                            <p className="text-md md:text-lg break-words">
                                {experience.month_started} {experience.year_started} - {experience.month_ended ? `${experience.month_ended} ${experience.year_ended}` : 'Present'}
                            </p>
                            <p className="text-md md:text-lg break-words">
                                {calculateExperience(experience.month_started, experience.year_started, experience.month_ended, experience.year_ended)}
                            </p>
                            <div className="mt-8">
                                <Link href="/#experience" passHref className="flex justify-center">
                                    <div className="flex items-center">
                                        <FaArrowLeftLong className="mr-2 text-white text-lg" />
                                        <span className="text-white text-md md:text-lg hover:underline">Back to Experience section</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column (Stacks below on mobile, becomes the second column on larger screens) */}
                        <div className="flex flex-col justify-start items-start p-4 overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
                            <h3 className="text-3xl font-semibold my-4">Experiences</h3>
                            <ul className="text-md md:text-lg list-disc pl-5 mb-4 break-words leading-loose">
                                {experience.experiences.map((exp) => (
                                    <li key={exp.id}>{exp.experience}</li>
                                ))}
                            </ul>
                            
                            <h3 className="text-3xl font-semibold my-4">Languages, Frameworks, and Libraries</h3>
                            <div className="flex flex-wrap gap-2 mb-4 text-white">
                                {experience.language_framework_libraries?.map((item) => (
                                    <Badge
                                        key={item.id}
                                        className="flex py-1 px-2 md:py-2 md:px-3 bg-custom-700 rounded-full"
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
                                        <span className="text-sm md:text-lg">{item.name}</span>
                                    </Badge>
                                ))}
                            </div>
                            
                            <h3 className="text-3xl font-semibold my-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-4 text-white">
                                {experience.technologies?.map((item) => (
                                    <Badge
                                        key={item.id}
                                        className="flex py-1 px-2 md:py-2 md:px-3 bg-custom-700 rounded-full"
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
                                        <span className="text-sm md:text-lg">{item.name}</span>
                                    </Badge>
                                ))}
                            </div>

                            <h3 className="text-3xl font-semibold my-4">Skills</h3>
                            <ul className="text-md md:text-lg list-disc pl-5 mb-4 break-words leading-loose">
                                {experience.skills.map((skill) => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
};

export default ExperiencePage;
