"use client"
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar'; 
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import SkillsSection from '@/components/home/SkillsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import Footer from '@/components/Footer'; 

const Home: NextPage = () => {
  return (<>
      <Navbar />
      <main>
        <article>
          <HomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <FeaturedProjectsSection />
        </article>
      </main>
      <Footer />
  </>);
};

export default Home;
