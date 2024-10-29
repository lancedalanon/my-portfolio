import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6';
import Link from 'next/link';

// SocialLinks component for reusability
const SocialLinks: React.FC = () => (
    <div className="flex space-x-4">
        <a
            className="flex items-center space-x-2 hover:text-custom-200 transition-transform transform hover:scale-110 duration-300"
            href="/documents/Lance-Orville-Rosario-Dalanon-Resume.pdf"
            download
            aria-label="Download Resume"
        >
            <FaSheetPlastic size={24} />
            <span>Resume</span>
        </a>
        <a 
            href="https://www.linkedin.com/in/lance-orville-dalanon-453109166/"
            className="flex items-center space-x-2 hover:text-custom-200 transition-transform transform hover:scale-110 duration-300"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
        </a>
        <a 
            href="https://github.com/lancedalanon"
            className="flex items-center space-x-2 hover:text-custom-200 transition-transform transform hover:scale-110 duration-300"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub size={24} />
            <span>GitHub</span>
        </a>
    </div>
);

// QuickLinks component for reusable quick access links
const QuickLinks: React.FC = () => (
    <ul className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 mb-4">
            <li>
                <a href="/#home" className="hover:text-custom-200 transition-colors duration-300" aria-label="Go to Home">
                    Home
                </a>
            </li>
            <li>
                <a href="/#about-me" className="hover:text-custom-200 transition-colors duration-300" aria-label="Learn About Me">
                    About Me
                </a>
            </li>
            <li>
                <a href="/#skills" className="hover:text-custom-200 transition-colors duration-300" aria-label="View My Skills">
                    Skills
                </a>
            </li>
            <li>
                <a href="/#experience" className="hover:text-custom-200 transition-colors duration-300" aria-label="See My Experience">
                    Experience
                </a>
            </li>
            <li>
                <a href="/#highlights" className="hover:text-custom-200 transition-colors duration-300" aria-label="View Featured Projects">
                    Highlights
                </a>
            </li>
        </div>
        <div className="space-y-4">
            <li>
                <Link href="/projects" className="text-custom-100 hover:text-custom-200 transition-colors duration-300" aria-label="Explore My Projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/awards" className="text-custom-100 hover:text-custom-200 transition-colors duration-300" aria-label="Explore My Awards">
                    Awards
                </Link>
            </li>
        </div>
    </ul>
);

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer className="bg-custom-900 text-custom-100 py-8 md:px-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-[50%_25%_25%] gap-8 mx-8 md:mx-20">
                
                {/* Let’s Connect Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Let’s Connect</h2>
                    <p className="leading-relaxed">
                        Excited to bring my skills and passion to new opportunities. Let’s connect!
                    </p>
                    {/* Social Media Links */}
                    <SocialLinks />
                </div>

                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    {/* Links to key pages */}
                    <QuickLinks />
                </div>

                {/* Combined Contact Section */}
                <address className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact</h3>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope size={20} />
                        <a 
                            href="mailto:lanceorville5@gmail.com"
                            className="hover:text-custom-200 transition-colors duration-300"
                            aria-label="Email Lance Dalanon"
                        >
                            lanceorville5@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone size={20} />
                        <span>(+63) 954-492-1406</span>
                    </div>
                </address>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-16 mx-4">
                <time dateTime={`${currentYear}-01-01`}>© {currentYear}</time> Lance Orville Dalanon. All rights reserved.
                <Link href="/privacy-policy" className="hover:text-custom-200"> Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
