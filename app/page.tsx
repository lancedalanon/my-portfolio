"use client"
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar'; 
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import SkillsSection from '@/components/home/SkillsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ContactSection from '@/components/home/ContactSection';

const Home: NextPage = () => {
  return (<>
      <Navbar />
      <main>
        <article className="bg-custom-700">
          <HomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </article>
      </main>
  </>);
};

export default Home;
