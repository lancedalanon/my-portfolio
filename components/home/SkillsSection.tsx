import React from 'react';
import skills from '@/constants/skills.json';
import { Card, CardHeader, CardBody } from '@/components/Card';
import { DiCode, DiGit, DiStreamline, DiHtml5, DiPython, DiPhp } from "react-icons/di";
import { Skill, SkillIconKey } from '@/types/skillTypes';

// Define a string union type for skill_icon keys
const skillIcons = {
  DiCode: DiCode,
  DiPhp: DiPhp,
  DiHtml5: DiHtml5,
  DiPython: DiPython,
  DiStreamline: DiStreamline,
  DiGit: DiGit
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center text-center px-5 py-14 bg-custom-800 ">
     <h2 className="text-5xl font-bold text-custom-100 mb-10">
      WHAT I BRING TO THE TABLE
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={{
            ...skill,
            skill_icon: skill.skill_icon as SkillIconKey,
          }}
        />
      ))}
     </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {  
  const IconComponent = skillIcons[skill.skill_icon];  

  // Function to handle card click
  const handleSkillCardClick = () => {
    console.log(skill.id); // Log the skill id to the console
  };
  
  return (
    <Card 
     className="max-w-sm w-full bg-custom-600 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
     onClick={handleSkillCardClick}
    >
      <CardHeader>
        <div className="text-white text-7xl flex flex-col items-center justify-center text-center mb-2">
          {IconComponent && <IconComponent />}
        </div>
        <p className="text-white text-xl">
          {skill.skill_title}
        </p>
      </CardHeader>
      <CardBody>
        <p className="text-white text-md">
          {skill.skill_description}
        </p>
      </CardBody>
    </Card>
  );
};

export default SkillsSection;