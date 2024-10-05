"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true); // Navbar visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle state

  // Function to control Navbar visibility based on scroll direction
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide navbar on scroll down
      } else {
        setVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    }
  };

  // Debounce the scroll event for better performance
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(controlNavbar, 100); // Delay to debounce
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Smooth scrolling effect for in-page navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`bg-custom-900 fixed w-full z-50 shadow-lg transition-transform duration-300 ease-in-out px-8 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              onClick={(e) => handleSmoothScroll(e, "about-me")}
              className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "experience")}
              className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#featured-projects"
              onClick={(e) => handleSmoothScroll(e, "featured-projects")}
              className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
            >
              FEATURED PROJECTS
            </a>
          </li>
        </ul>

        {/* External Links for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/documents/LanceOrvilleRDalanonResume.pdf"
              className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
              download
            >
              <FaSheetPlastic className="mr-1" /> RESUME
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lance-orville-dalanon-453109166/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="mr-1" /> LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lancedalanon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="mr-1" /> GITHUB
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-custom-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-custom-900 py-4">
          {/* In-Page Links */}
          <ul className="space-y-8 text-center">
            <li>
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={(e) => handleSmoothScroll(e, "about-me")}
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#featured-projects"
                onClick={(e) => handleSmoothScroll(e, "featured-projects")}
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
              >
                FEATURED PROJECTS
              </a>
            </li>
          </ul>

          {/* External Links (Mobile) */}
          <ul className="space-y-8 text-center mt-8">
            <li>
              <a
                href="/documents/LanceOrvilleRDalanonResume.pdf"
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
                download
              >
                RESUME
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lance-orville-dalanon-453109166/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
                aria-label="LinkedIn"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lancedalanon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
                aria-label="GitHub"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
