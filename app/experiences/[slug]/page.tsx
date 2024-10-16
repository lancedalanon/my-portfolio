"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Metadata from "@/components/Metadata";
import Image from 'next/image';
import { useParams } from "next/navigation";
import Experience from "@/types/experienceTypes"; 
import Badge from '@/components/Badge';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Spinner from "@/components/Spinner";
import DOMPurify from 'isomorphic-dompurify';

// Utility function to calculate experience in years and months
const calculateExperience = (startMonth: string, startYear: string, endMonth: string | null, endYear: string | null) => {
    const startDate = new Date(`${startMonth} 1, ${startYear}`);
    let endDate;
    if (endMonth && endYear) {
        endDate = new Date(Number(endYear), Number(new Date(`${endMonth} 1, ${endYear}`).getMonth()) + 1, 0); 
    } else {
        const today = new Date();
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth() + 1); 
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        return `${months} months`;
    } else if (months === 0) {
        return `${years} years`;
    } else {
        return `${years} years and ${months} months`;
    }
};

const ExperiencePage: React.FC = () => {
    const description = "Discover Lance Orville Dalanon's professional journey, showcasing key work experiences and contributions in software engineering and web development.";
    const { slug } = useParams() as { slug: string };
    const pathname = usePathname();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [experienceData, setExperienceData] = useState<Experience[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Scroll to top when pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Fetch experience data once
    useEffect(() => {
        const fetchExperienceData = async () => {
            const response = await fetch('/experiences.json');
            const data = await response.json();
            setExperienceData(data);
            setLoading(false);
        };

        fetchExperienceData();
    }, []);

    // Use useMemo to find experience based on slug
    const experience = useMemo(() => {
        return experienceData.find((experience: Experience) => experience.slug === slug);
    }, [experienceData, slug]);

    // Handle loading state and experience not found
    if (loading) {
        return (<>
            <Metadata description={description} />
            <main>
                <article>
                    <section className="h-full min-h-screen flex flex-col items-center justify-center bg-custom-800">
                        <Spinner />
                    </section>
                </article>
            </main>
        </>
        );
    }

    if (!experience) {
        return (
            <>
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
            </>
        );
    }

    return (
        <>
            <Metadata description={description} />
            <main>
                <article>
                    <section className="grid grid-cols-1 md:grid-cols-[30%_auto] bg-custom-800 min-h-screen text-white pt-20 pb-10 px-6 md:px-20">
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

                        <div
                            className="flex flex-col justify-start items-start p-4 overflow-y-auto scrollbar-hide"
                            style={isSmallScreen ? undefined : { maxHeight: 'calc(100vh - 2rem)' }}
                        >
                            <h3 className="text-3xl font-semibold my-4">Experiences</h3>
                            <ul className="text-md md:text-lg list-disc pl-5 mb-4 break-words leading-loose">
                                {experience.experiences.map((exp) => (
                                    <li 
                                        key={exp.id}
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(exp.experience),
                                        }}
                                    >
                                    </li>
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
