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
}