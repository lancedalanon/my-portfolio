export interface LanguageFrameworkLibrary {
    id: number;
    name: string;
    image: string;
    is_featured: number;
}

export interface Technology {
    id: number;
    name: string;
    image: string;
}

export interface Skill {
    id: number;
    name: string;
}

export interface Section {
    id: number;
    subheading: string;
    content: string;
}

export interface Project {
    id: number;
    slug: string;
    project_name: string;
    project_headline: string;
    project_image: string;
    short_description: string;
    month_start: string;
    year_start: string;
    month_end: string;
    year_end: string;
    is_featured: number;
    language_framework_libraries: LanguageFrameworkLibrary[];
    technologies: Technology[];
    skills: Skill[];
    sections: Section[];
}
