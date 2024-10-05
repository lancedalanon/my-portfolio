import { IconType } from 'react-icons';
import { DiCode, DiGit, DiDatabase, DiHtml5, DiPython, DiPhp } from "react-icons/di";

// Define a string union type for skill_icon keys
export type SkillIconKey = 'DiCode' | 'DiPhp' | 'DiHtml5' | 'DiPython' | 'DiDatabase' | 'DiGit';

// Define the Skill interface with skill_icon restricted to SkillIconKey
export interface Skill {
  id: number;
  skill_title: string;
  skill_description: string;
  skill_icon: SkillIconKey; // Now this can only be one of the valid keys
}

// Define the skillIcons object
export const skillIcons: { [key in SkillIconKey]: IconType } = {
  DiCode,
  DiPhp,
  DiHtml5,
  DiPython,
  DiDatabase,
  DiGit,
};

