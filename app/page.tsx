"use client"
import type { NextPage } from 'next';
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import SkillsSection from '@/components/home/SkillsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import MilestonesSection from '@/components/home/MilestonesSection';
import Metadata from "@/components/Metadata";

const Home: NextPage = () => {
  const description = "Learn more about Lance Orville Dalanon, a Full-Stack Software Engineer passionate about web development.";

  return (<>
      <Metadata description={description} />
      <main className="overflow-x-hidden">
        <article>
          <HomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <MilestonesSection />
        </article>
      </main>
  </>);
};

export default Home;
