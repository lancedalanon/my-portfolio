"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Get the current scroll position
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down or up
      if (currentScrollY > lastScrollY) {
        // User is scrolling down, hide the navbar
        setVisible(false);
      } else {
        // User is scrolling up, show the navbar
        setVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-custom-800 fixed w-full z-10 shadow-lg transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between">
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-custom-100 font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="text-custom-100 font-bold">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-custom-100 font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-custom-100 font-bold">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-custom-100 font-bold">
              Projects
            </a>
          </li>
        </ul>
        <ul className="flex space-x-8">
          <li>
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-100 font-bold"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-100 font-bold"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
