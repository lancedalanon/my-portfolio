import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Image from 'next/image';
import experience from '@/constants/experience.json';

const ExperienceSection: React.FC = () => {
    const [maxHeight, setMaxHeight] = useState(0); // State to store the maximum height

    useEffect(() => {
        // Calculate max height of bubbles
        const bubbleElements = document.querySelectorAll('.bubble'); // Select all bubble elements
        let maxHeightValue = 0;

        bubbleElements.forEach(bubble => {
            const height = bubble.offsetHeight; // Get the height of each bubble
            if (height > maxHeightValue) {
                maxHeightValue = height; // Update max height
            }
        });

        setMaxHeight(maxHeightValue); // Set max height in state
    }, []);

    return (
        <section id="experience" className="bg-custom-800 px-5 py-14">
            <h2 className="text-5xl font-bold text-custom-100 text-center my-4">
                Experience
            </h2>
            <div className="flex flex-col items-start md:items-center">
                <div className="relative">
                    {/* Solid circle at the start with line */}
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-custom-300 z-10"></div>
                        <div className="h-40 w-1 bg-custom-500"></div>
                    </div>

                    {experience.map((point, index) => {
                        const durationMonths = calculateExperienceDuration(
                            point.month_started, 
                            point.year_started, 
                            point.month_ended, 
                            point.year_ended
                        );
                        const years = Math.floor(durationMonths / 12);
                        const months = durationMonths % 12;

                        return (
                            <div key={point.id} className="flex flex-col items-center relative">
                                <div className="relative">
                                    <Image 
                                        src={point.image} 
                                        alt={point.label} 
                                        className="h-18 w-18 rounded-full border-2 border-custom-100 z-10" 
                                        height={100} 
                                        width={100} 
                                    />

                                    {/* Speech bubble */}
                                    <div 
                                        className={`bubble absolute top-0 ${index % 2 === 0 ? 'right-[-325px] md:left-[-340px]' : 'right-[-300px]'} 
                                        p-4 rounded-lg max-w-xs text-left text-custom-100 bg-custom-600 shadow-lg z-10`}
                                        style={{
                                            height: maxHeight ? `${maxHeight}px` : 'auto', // Set height dynamically
                                            maxHeight: '150px', // Set a maximum height for the bubble
                                            overflow: 'hidden', // Hide overflow content
                                            display: '-webkit-box',
                                            WebkitLineClamp: 5, // Limit the number of lines
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        <strong>{point.role}</strong><br />
                                        {point.company_name}<br />
                                        {point.month_started} {point.year_started} - {point.month_ended || 'Present'} {point.year_ended || ''} &bull; <span>
                                            ({years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''} 
                                            {years > 0 && months > 0 ? ' ' : ''} 
                                            {months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''})
                                        </span><br />
                                    </div>
                                </div>

                                {/* Line connecting to the next point, only if not the last element */}
                                {index < experience.length - 1 && (
                                    <div className="h-40 w-1 bg-custom-500"></div>
                                )}
                            </div>
                        );
                    })}

                    {/* Solid circle at the end with line */}
                    <div className="flex flex-col items-center">
                        {experience.length > 0 && (
                            <div className="h-40 w-1 bg-custom-500"></div>
                        )}
                        <div className="h-8 w-8 rounded-full bg-custom-300 z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Function to calculate the total months of experience
const calculateExperienceDuration = (monthStarted, yearStarted, monthEnded, yearEnded) => {
    const months = {
        January: 0, February: 1, March: 2, April: 3, 
        May: 4, June: 5, July: 6, August: 7, 
        September: 8, October: 9, November: 10, December: 11
    };

    const startMonthIndex = months[monthStarted];
    const startYear = parseInt(yearStarted, 10);
    
    // Get the end month and year, defaulting to the current date if not provided
    let endMonthIndex = monthEnded ? months[monthEnded] : new Date().getMonth();
    let endYear = yearEnded ? parseInt(yearEnded, 10) : new Date().getFullYear();

    // Calculate the total number of months of experience
    let totalMonths = (endYear - startYear) * 12 + (endMonthIndex - startMonthIndex) + 1; // Add 1 to include the end month

    // If the end date is before the start date, return 0
    if (totalMonths < 0) {
        return 0;
    }

    return totalMonths;
};

export default ExperienceSection;
