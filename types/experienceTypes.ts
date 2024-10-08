import { LanguageFrameworkLibrary, Technology, Skill } from "@/types/projectTypes";

export default interface Experience {
    id: number;                     
    image: string;                   
    label: string;                   
    role: string;                    
    company_name: string;           
    description: string | null;      
    month_started: string;           
    year_started: string;            
    month_ended: string | null;      
    year_ended: string | null;
    experiences: string[] | null;     
    language_framework_libraries: LanguageFrameworkLibrary[];
    technologies: Technology[];
    skills: Skill[]; 
}