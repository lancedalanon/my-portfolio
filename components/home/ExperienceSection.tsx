"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import experience from '@/constants/experience.json';

const useIsSmallScreen = () => {
    // Initialize isSmall with false, as we don't have window information on the server
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we are in the browser)
        const updateIsSmall = () => {
            if (typeof window !== 'undefined') {
                setIsSmall(window.innerWidth < 640); // Tailwind's sm breakpoint
            }
        };

        // Set initial value
        updateIsSmall();

        // Add event listener for resize
        window.addEventListener('resize', updateIsSmall);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', updateIsSmall);
    }, []);

    return isSmall;
};

const ExperienceSection: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <section id="experience" className="px-5 py-14 bg-custom-700">
            <h2 className="text-5xl font-bold text-custom-100 text-center my-4">
                EXPERIENCE
            </h2>
                {/* Render based on screen size */}
                {isSmallScreen ? (
                    // Small Screen Layout
                    <div className="grid grid-cols-[1.5%_99.5%] place-items-center ml-10">
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>

                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div className="h-20 w-20">
                            <Image 
                                src={`/images/Codeyani.jpg`} 
                                alt={`Codeyani`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div className="text-white text-start ml-14">
                            <strong className="text-md">Junior Full Stack Software Engineer</strong>
                            <p className="text-sm">Codeyani</p>
                            <p className="text-sm">Jun 2024 - Present · 5 mos</p>
                        </div>

                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div className="h-20 w-20">
                            <Image 
                                src={`/images/Erovoutika.jfif`} 
                                alt={`Erovoutika`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div className="text-white text-start ml-14">
                            <strong className="text-md">Full Stack Web Developer Intern</strong>
                            <p className="text-sm">Erovoutika</p>
                            <p className="text-sm">Mar 2024 - May 2024 · 3 mos</p>
                        </div>

                        <div className="h-32 w-2 bg-custom-300"></div> 
                        <div></div>

                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>
                    </div>
                ) : (
                    // Default Layout
                    <div className="grid grid-cols-[48.5%_1%_48.5%] place-items-center">
                        <div></div>
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div className="text-white text-end mr-20">
                            <strong className="text-lg md:text-2xl">Junior Full Stack Software Engineer</strong>
                            <p className="text-md md:text-lg">Codeyani IT Solutions</p>
                            <p className="text-md md:text-lg">Jun 2024 - Present · 5 mos</p>
                        </div>
                        <div className="relative h-32 w-32">
                            <Image 
                                src={`/images/Codeyani.jpg`} 
                                alt={`Codeyani`} 
                                className="rounded-full border-2 border-custom-100"
                                height={200} 
                                width={200} 
                            />
                        </div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-32">
                            <Image 
                                src={`/images/Erovoutika.jfif`} 
                                alt={`Erovoutika`} 
                                className="rounded-full border-2 border-custom-100"
                                height={200} 
                                width={200} 
                            />
                        </div>
                        <div className="text-white text-start ml-20">
                            <strong className="text-lg md:text-2xl">Full Stack Web Developer Intern</strong>
                            <p className="text-md md:text-lg">Erovoutika</p>
                            <p className="text-md md:text-lg">Mar 2024 - May 2024 · 3 mos</p>
                        </div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>
                    </div>
                )}
        </section>
    );
};

export default ExperienceSection;
