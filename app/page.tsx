"use client"
import type { NextPage } from 'next';
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import SkillsSection from '@/components/home/SkillsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';

const Home: NextPage = () => {
  return (<>
      <main>
        <article>
          <HomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <FeaturedProjectsSection />
        </article>
      </main>
  </>);
};

export default Home;
