import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import experience from '@/constants/experience.json';

const useIsSmallScreen = () => {
    const [isSmall, setIsSmall] = useState(window.innerWidth < 640); // Tailwind's sm breakpoint

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 640);
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmall;
};

const ExperienceSection: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();

    return (
        <section id="experience" className="bg-custom-800 px-5 py-14">
            <h2 className="text-5xl font-bold text-custom-100 text-center my-4">
                Experience
            </h2>
            <div className="grid grid-cols-3 place-items-center">
                {/* Render based on screen size */}
                {isSmallScreen ? (
                    // Small Screen Layout
                    <>
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>
                        <div></div>

                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>
                        <div></div>

                        <div className="h-16 w-16 md:h-24 md:w-24">
                            <Image 
                                src={`/images/Codeyani.jpg`} 
                                alt={`Codeyani`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div></div>
                        <div></div>

                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>
                        <div></div>

                        <div className="h-16 w-16 md:h-24 md:w-24">
                            <Image 
                                src={`/images/Erovoutika.jfif`} 
                                alt={`Erovoutika`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div></div>
                        <div></div>

                        <div className="h-32 w-2 bg-custom-300"></div> 
                        <div></div>
                        <div></div>

                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>
                        <div></div>
                    </>
                ) : (
                    // Default Layout
                    <>
                        <div></div>
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-16 w-16 md:h-24 md:w-24">
                            <Image 
                                src={`/images/Codeyani.jpg`} 
                                alt={`Codeyani`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-16 w-16 md:h-24 md:w-24">
                            <Image 
                                src={`/images/Erovoutika.jfif`} 
                                alt={`Erovoutika`} 
                                className="rounded-full border-2 border-custom-100"
                                height={100} 
                                width={100} 
                            />
                        </div>
                        <div></div>

                        <div></div>
                        <div className="h-32 w-2 bg-custom-300"></div>
                        <div></div>

                        <div></div>
                        <div className="h-8 w-8 rounded-full bg-custom-300"></div>
                        <div></div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;
