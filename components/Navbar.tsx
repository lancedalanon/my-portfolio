"use client";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-800 bg-opacity-80 fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-custom-100 font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-custom-100 font-bold">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="text-custom-100 font-bold">
              Services
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
          <li>
            <a href="#contact" className="text-custom-100 font-bold">
              Contact
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
