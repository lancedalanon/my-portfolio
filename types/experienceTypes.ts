import { LanguageFrameworkLibrary, Technology, Skill } from "@/types/projectTypes";

export default interface Experience {
    id: number;                     
    image: string;                   
    label: string;   
    slug: string;                
    role: string;                    
    company_name: string;           
    month_started: string;           
    year_started: string;            
    month_ended: string | null;      
    year_ended: string | null;
    experiences: {
        id: number;
        experience: string;
    }[];
    language_framework_libraries: LanguageFrameworkLibrary[];
    technologies: Technology[];
    skills: Skill[];
}