"use client"
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar'; 
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';

const Home: NextPage = () => {
  return (<>
      <Navbar />
      <main>
        <article>
          <HomeSection />
          <AboutMeSection />
          <section id="skills" className="bg-custom-800 flex flex-col items-center justify-center text-center px-20 py-5">
            <h2 className="text-5xl font-bold text-custom-100 mb-4">
              Skills
            </h2>
          </section>
        </article>
      </main>
  </>);
};

export default Home;
