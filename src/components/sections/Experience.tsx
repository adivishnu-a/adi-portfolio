import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ExperienceCard from '../ui/ExperienceCard';
import { useScrollAnimation } from '@/utils/animations';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Product Development Intern',
    company: 'Darwinbox',
    period: 'Jan 2024 - Present',
    description: 'Working on innovative HR tech solutions at one of India\'s leading HR technology companies. Contributing to product development and enhancement.',
    skills: ['JavaScript', 'React', 'UI/UX', 'Product Development'],
    logo: 'https://ik.imagekit.io/cowboypanda/4mOW-9q3_400x400-removebg-preview.png?updatedAt=1741930719728'
  },
  {
    title: 'Associate, McCarthy Lab',
    company: 'Next Tech Lab',
    period: 'Feb 2023 - Mar 2024',
    description: 'Contributed to research and development projects at McCarthy Lab, focusing on machine learning applications and web development technologies.',
    skills: ['Machine Learning', 'Python', 'Research', 'Web Development'],
    logo: 'https://ik.imagekit.io/cowboypanda/Vs9felK2_400x400-removebg-preview.png?updatedAt=1741930719737'
  },
  {
    title: 'Student Council Member',
    company: 'SRM University, AP',
    period: '2022 - Present',
    description: 'Served as a member of the Public Relations Wing, organizing events and managing communications for the student body.',
    skills: ['Communication', 'Event Management', 'Leadership', 'Team Work'],
    logo: 'https://ik.imagekit.io/cowboypanda/SRM_University,_Andhra_Pradesh_logo.png?updatedAt=1741930496072'
  },
];

const educationItems = [
  {
    title: 'Bachelor of Technology - B.Tech, Computer Science',
    company: 'SRM University, AP',
    period: '2021 - 2025',
    description: 'Maintaining a 9.41 CGPA while actively participating in various technical clubs and events. Specializing in computer science with a focus on modern technologies.',
    skills: ['Computer Science', 'Data Structures', 'Algorithms', 'Machine Learning'],
    logo: 'https://ik.imagekit.io/cowboypanda/SRM_University,_Andhra_Pradesh_logo.png?updatedAt=1741930496072'
  },
  {
    title: 'Higher Secondary Certificate (Intermediate)',
    company: 'Sri Chaitanya College of Education',
    period: '2019 - 2021',
    description: 'Completed higher secondary education with 96% marks, focusing on Mathematics, Physics, and Chemistry.',
    skills: ['Mathematics', 'Physics', 'Chemistry'],
    logo: 'https://ik.imagekit.io/cowboypanda/1839673-srica__1_-removebg-preview.png?updatedAt=1741931373677'
  },
  {
    title: 'ICSE Secondary School Certificate (Class 10)',
    company: 'Little Flower E.M. School',
    period: '2018 - 2019',
    description: 'Completed ICSE board examination with 96% marks.',
    skills: ['Mathematics', 'Science', 'English', 'Computer Science'],
    logo: 'https://ik.imagekit.io/cowboypanda/lfs-logo.png?updatedAt=1741931373713'
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const animation = useScrollAnimation(0.1, 'up');
  const [sliderPosition, setSliderPosition] = useState(0);
  const experienceRef = useRef<HTMLButtonElement>(null);
  const educationRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Update slider position based on active tab
    if (activeTab === 'experience' && experienceRef.current) {
      setSliderPosition(0);
    } else if (activeTab === 'education' && educationRef.current) {
      setSliderPosition(1);
    }
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    if (value) {
      setActiveTab(value as 'experience' | 'education');
    }
  };

  return (
    <section id="experience" className="section-container mb-16">
      <div {...animation} className="max-w-4xl mx-auto">
        <h2 className="section-title">
          My <span className="text-primary">Journey</span>
        </h2>

        {/* Enhanced Toggle Tabs with Slider */}
        <div className="flex justify-center mb-12">
          <div className="relative p-1 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            <div 
              className="absolute top-1 h-[calc(100%-8px)] rounded-lg bg-primary transition-all duration-500 ease-in-out"
              style={{ 
                width: 'calc(50% - 4px)', 
                left: sliderPosition === 0 ? '4px' : 'calc(50% + 2px)',
              }}
            />
            
            <ToggleGroup 
              type="single" 
              value={activeTab} 
              onValueChange={handleTabChange} 
              className="relative z-10 flex"
            >
              <ToggleGroupItem 
                ref={experienceRef}
                value="experience" 
                className={cn(
                  "z-10 rounded-lg transition-all duration-300 px-6 py-3 flex items-center gap-2.5 text-sm font-medium w-full",
                  activeTab === 'experience' 
                    ? "text-white" 
                    : "text-black dark:text-gray-200"
                )}
              >
                <Briefcase className={cn(
                  "h-4 w-4",
                  activeTab === 'experience' ? "text-white" : "text-black dark:text-gray-200"
                )} />
                Experience
              </ToggleGroupItem>
              
              <ToggleGroupItem 
                ref={educationRef}
                value="education" 
                className={cn(
                  "z-10 rounded-lg transition-all duration-300 px-6 py-3 flex items-center gap-2.5 text-sm font-medium w-full",
                  activeTab === 'education' 
                    ? "text-white" 
                    : "text-black dark:text-gray-200"
                )}
              >
                <GraduationCap className={cn(
                  "h-4 w-4",
                  activeTab === 'education' ? "text-white" : "text-black dark:text-gray-200"
                )} />
                Education
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Timeline with improved animation */}
        <div className="grid grid-cols-1 gap-4 relative overflow-hidden mb-8">
          <div className={cn(
            "transition-all duration-500 ease-in-out transform grid grid-cols-1 gap-4 absolute w-full",
            activeTab === 'experience' 
              ? "translate-x-0 opacity-100 relative" 
              : "translate-x-[-100%] opacity-0 absolute pointer-events-none"
          )}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                skills={experience.skills}
                logo={experience.logo}
                index={index}
              />
            ))}
          </div>
          
          <div className={cn(
            "transition-all duration-500 ease-in-out transform grid grid-cols-1 gap-4 absolute w-full",
            activeTab === 'education' 
              ? "translate-x-0 opacity-100 relative" 
              : "translate-x-[100%] opacity-0 absolute pointer-events-none"
          )}>
            {educationItems.map((education, index) => (
              <ExperienceCard
                key={index}
                title={education.title}
                company={education.company}
                period={education.period}
                description={education.description}
                skills={education.skills}
                logo={education.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;