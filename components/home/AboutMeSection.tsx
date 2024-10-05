import React from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center text-center px-20 py-14 bg-custom-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left px-2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-custom-100 mb-4">  
              MEET YOUR NEXT SOFTWARE ENGINEER: MY JOURNEY
            </h2>
            <p className="text-xl text-custom-200 mb-4">
              Hi there! I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. 
              I work with a range of technologies, including <strong>JavaScript</strong>, <strong>Python</strong>, <strong>Laravel</strong>, <strong>Vue.js</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, 
              and the <strong>TALL stack</strong> (<strong>Tailwind CSS</strong>, <strong>Alpine.js</strong>, <strong>Livewire</strong>). 
              I’m all about <strong>writing clean, secure code</strong>, and I make it a point to follow best practices, 
              like thorough <strong>code reviews</strong> and <strong>OWASP</strong> standards. 
              I thrive in <strong>Agile</strong> environments, where <strong>teamwork</strong> and <strong>communication</strong> are key to reaching our goals. 
              With a solid foundation in both <strong>front-end and back-end development</strong>, I’m excited to take on challenges and come up with innovative solutions.
            </p>
            <p className="text-xl text-custom-200 mb-4">
              Beyond my technical skills, I’m genuinely passionate about using technology 
              to tackle real-world problems. I love learning new tools and methods that help me grow as a developer.
              Whether I’m mentoring junior developers or diving into new frameworks, I’m committed to continuous improvement.
              I’m eager to be part of projects that not only challenge me but also make a meaningful difference in people’s 
              lives.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a 
              className="flex items-center text-lg bg-white text-custom-800 border border-custom-800 font-semibold px-6 py-4 rounded-full shadow hover:bg-gray-200 transition-all duration-200"
              href="/documents/LanceOrvilleRDalanonResume.pdf"
              download 
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src={`/images/lance_dalanon.JPG`} 
            alt={`Lance Dalanon`} 
            width={480} 
            height={480} 
            className="rounded-xl shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
