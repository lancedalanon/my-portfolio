import React from 'react';
import Image from 'next/image';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={`/images/programming-background.jpg`} 
          alt="Background Image" 
          layout="fill"
          objectFit="cover" 
          className="z-0" 
        />
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div> {/* Adjust opacity as needed */}
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-custom-100 relative z-10 mx-4">
        Hi, I’m Lance Dalanon!
      </h1> 
      <p className="text-lg md:text-xl text-custom-200 mt-4 max-w-2xl relative z-10 mx-4">
        A dedicated and passionate full-stack software engineer committed 
        to delivering innovative technical solutions tailored to meet your business needs.
      </p>
      <a className="mt-6 text-lg bg-white text-custom-800 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-200 transition-all duration-200 relative z-10" href="#about-me">
        Learn More
      </a>
    </section>
  );
};

export default HomeSection;
