"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaLaptopCode } from "react-icons/fa";
import { useRouter, usePathname } from 'next/navigation';
import { GiAchievement } from "react-icons/gi";
import Link from "next/link";

// Component for QuickLinks (Home, About Me, Skills, etc.)
const QuickLinks: React.FC<{ handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => void, isMobile?: boolean, closeMobileMenu: () => void }> = ({ handleSmoothScroll, isMobile, closeMobileMenu }) => {
  const pathname = usePathname(); // Get the current path in Next.js App Router
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    // Check if we're already on the homepage
    if (pathname === '/') {
      // If we're on the homepage, use smooth scroll
      handleSmoothScroll(e, section);
    } else {
      // Otherwise, navigate to the homepage and then scroll
      e.preventDefault();
      router.push(`/#${section}`);
    }
    // Close mobile menu after link click
    closeMobileMenu();
  };

  return (
    <ul className={`${isMobile ? "space-y-6" : "space-x-8"} ${isMobile ? "flex flex-col items-center justify-center" : "md:flex hidden"}`}>
      {["home", "about-me", "skills", "experience", "highlights"].map((section) => (
        <li key={section}>
          <a
            href={`/#${section}`}
            onClick={(e) => handleClick(e, section)}
            className="text-custom-100 font-bold hover:text-custom-200 transition-colors"
          >
            {section.replace("-", " ").toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Component for SocialLinks (Resume, LinkedIn, GitHub, etc.)
const SocialLinks: React.FC<{ isMobile?: boolean, closeMobileMenu: () => void }> = ({ isMobile, closeMobileMenu }) => (
  <ul className={`${isMobile ? "space-y-6" : "space-x-8"} ${isMobile ? "flex flex-col items-center justify-center mt-6" : "md:flex hidden"}`}>
    <li>
      <Link
        href="/projects"
        onClick={closeMobileMenu}
        aria-label="Projects"
        className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
      >
        <FaLaptopCode className="mr-1" /> PROJECTS
      </Link>
    </li>
    <li>
      <Link
        href="/awards"
        onClick={closeMobileMenu}
        aria-label="Awards"
        className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
      >
        <GiAchievement className="mr-1" /> AWARDS
      </Link>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/lance-orville-dalanon-453109166/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-custom-100 font-bold hover:text-custom-200 transition-colors"
        aria-label="LinkedIn"
        onClick={closeMobileMenu}
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
        onClick={closeMobileMenu}
      >
        <FaGithub className="mr-1" /> GITHUB
      </a>
    </li>
  </ul>
);

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true); // Navbar visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const navbarRef = useRef<HTMLDivElement>(null); // Ref for the navbar container

  // Function to control Navbar visibility and close mobile menu on scroll down
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide navbar on scroll down
        setMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        setVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    }
  };

  // Close mobile menu when clicking outside of the navbar
  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false); // Close menu if clicked outside
    }
  };

  // Debounce the scroll event for better performance
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(controlNavbar, 100); // Delay to debounce
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); // Add listener for clicks outside navbar

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
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

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        ref={navbarRef}
        className={`bg-custom-900 fixed w-full z-20 shadow-lg transition-transform duration-300 ease-in-out px-8 pb-8 md:pb-0 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
          {/* Desktop QuickLinks */}
          <QuickLinks handleSmoothScroll={handleSmoothScroll} closeMobileMenu={closeMobileMenu} />

          {/* Desktop SocialLinks */}
          <SocialLinks closeMobileMenu={closeMobileMenu} />

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
            {/* Mobile QuickLinks and SocialLinks */}
            <QuickLinks handleSmoothScroll={handleSmoothScroll} isMobile closeMobileMenu={closeMobileMenu} />
            <SocialLinks isMobile closeMobileMenu={closeMobileMenu} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
