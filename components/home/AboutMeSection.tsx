import React from 'react';
import Image from 'next/image';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about-me" className="flex flex-col items-center justify-center text-center px-20 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left px-2">
          <h2 className="text-5xl font-bold text-custom-100 mb-4">ABOUT ME</h2>
          <p className="text-xl text-custom-300 mb-4">
            I am a dedicated Full Stack Software Engineer with experience in developing and 
            enhancing web applications using technologies such as JavaScript, Python, Laravel, 
            Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire). 
            I prioritize code quality and security by implementing best practices, including rigorous 
            code reviews and adhering to OWASP standards. My collaborative approach in Agile environments 
            fosters effective communication with cross-functional teams to achieve project goals. 
            With a solid foundation in both front-end and back-end development, I am eager to tackle 
            complex challenges and drive innovative solutions. I am ready to contribute my skills and 
            enthusiasm to a dynamic team focused on delivering exceptional user experiences.
          </p>
          <p className="text-xl text-custom-300">
            Beyond my technical skills, I am genuinely passionate about using technology to solve real-world problems. 
            I thrive on learning new tools and methodologies that enhance my capabilities, and I believe in the 
            importance of continuous improvement. Whether it's mentoring junior developers or exploring new frameworks, 
            I am committed to growing not just as a developer but also as a collaborator and leader in the tech community. 
            I am excited to be part of projects that not only challenge me but also have a meaningful impact on users’ lives.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src={`/images/lance_dalanon.JPG`} 
            alt={`Lance Dalanon`} 
            width="480" 
            height="480" 
            className="rounded-xl shadow-lg" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;