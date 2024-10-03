import React from 'react';
import Image from 'next/image';

const ExperienceSection: React.FC = () => {
    const experiencePoints = [
        { id: 1, image: '/images/Codeyani.jpg', label: 'Codeyani' },
        { id: 2, image: '/images/Erovoutika.jfif', label: 'Erovoutika' },
    ];

    return (
        <section id="experience" className="bg-custom-800 flex flex-col items-center justify-center text-center px-5 py-14">
            <h2 className="text-5xl font-bold text-custom-100 my-4">
                Experience
            </h2>
            <div className="flex flex-col items-center">
                <div className="relative">
                    {/* Solid circle at the start with line */}
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-custom-300 z-10"></div>
                        {/* Vertical line connecting to the first experience point */}
                        <div className="h-40 w-1 bg-custom-500"></div>
                    </div>

                    {experiencePoints.map((point, index) => (
                        <div key={point.id} className={`flex flex-col items-center`}>
                            {/* Render image if exists */}
                            {point.image ? (
                                <Image 
                                    src={point.image} 
                                    alt={point.label} 
                                    className="h-18 w-18 rounded-full border-2 border-custom-100 z-10" 
                                    height={100} 
                                    width={100} 
                                />
                            ) : null}

                            {/* Line connecting to the next point, only if not the last element */}
                            {index < experiencePoints.length - 1 && (
                                <div className="h-40 w-1 bg-custom-500"></div>
                            )}
                        </div>
                    ))}

                    {/* Solid circle at the end with line */}
                    <div className="flex flex-col items-center">
                        {/* Vertical line connecting from the last experience point */}
                        {experiencePoints.length > 0 && (
                            <div className="h-40 w-1 bg-custom-500"></div>
                        )}
                        <div className="h-8 w-8 rounded-full bg-custom-300 z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
