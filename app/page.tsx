"use client"
import type { NextPage } from 'next';
import HomeSection from '@/components/home/HomeSection';
import AboutMeSection from '@/components/home/AboutMeSection';
import SkillsSection from '@/components/home/SkillsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HighlightsSection from '@/components/home/HighlightsSection';
import Metadata from "@/components/Metadata";

const Home: NextPage = () => {
  const description = "Learn more about Lance Orville Dalanon, a Full-Stack Software Engineer passionate about web development.";

  return (<>
      <Metadata description={description} />
      <main>
        <article>
          <HomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ExperienceSection />
          <HighlightsSection />
        </article>
      </main>
  </>);
};

export default Home;
