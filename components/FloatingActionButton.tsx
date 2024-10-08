"use client";
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const FloatingActionButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    // Effect to handle scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-custom-500 text-white rounded-full shadow-lg p-4 transition transform hover:bg-custom-600 focus:outline-none focus:ring focus:ring-custom-300 
                               md:p-5 md:w-16 md:h-16 w-12 h-12 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-lg md:text-2xl" />
                </button>
            )}
        </>
    );
};

export default FloatingActionButton;
