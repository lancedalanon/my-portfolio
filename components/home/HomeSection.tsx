import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-custom-100">
        Hi, I'm Lance Dalanon!
      </h1> 
      <p className="text-xl text-custom-300 mt-4 max-w-2xl">
        A dedicated and passionate full-stack software engineer committed 
        to delivering innovative technical solutions tailored to meet your business needs.
      </p>
      <a className="mt-6 bg-white text-custom-800 font-semibold py-3 px-6 text-lg rounded-xl shadow hover:bg-gray-200 transition-all duration-200" href="#about-me">
        Learn More
      </a>
    </section>
  );
};

export default HomeSection;