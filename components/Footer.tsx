import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons

// SocialLinks component for reusability
const SocialLinks: React.FC = () => (
    <div className="flex space-x-4">
        <a href="https://linkedin.com/in/yourprofile"
            className="flex items-center space-x-2 hover:text-custom-200 transition-transform transform hover:scale-110 duration-300"
            aria-label="LinkedIn">
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
        </a>
        <a href="https://github.com/yourprofile"
            className="flex items-center space-x-2 hover:text-custom-200 transition-transform transform hover:scale-110 duration-300"
            aria-label="GitHub">
            <FaGithub size={24} />
            <span>GitHub</span>
        </a>
    </div>
);

// QuickLinks component for reusable quick access links
const QuickLinks: React.FC = () => (
    <ul className="space-y-2">
        <li>
            <a href="#about-me" className="hover:text-custom-200 transition-colors duration-300">
                About Me
            </a>
        </li>
        <li>
            <a href="#skills" className="hover:text-custom-200 transition-colors duration-300">
                Skills
            </a>
        </li>
        <li>
            <a href="#experience" className="hover:text-custom-200 transition-colors duration-300">
                Experience
            </a>
        </li>
        <li>
            <a href="#featured-projects" className="hover:text-custom-200 transition-colors duration-300">
                Featured Projects
            </a>
        </li>
    </ul>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-900 text-custom-100 py-8 md:py-12">
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
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact</h3>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope size={20} />
                        <a href="mailto:lanceorville5@gmail.com"
                           className="hover:text-custom-200 transition-colors duration-300"
                           aria-label="Email">
                            lanceorville5@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone size={20} />
                        <span>(+63) 921-273-7768</span>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center">
                <p className="text-sm">© 2024 Lance Dalanon. All rights reserved.</p>
                <a href="/privacy-policy" className="hover:text-custom-200 text-sm">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
