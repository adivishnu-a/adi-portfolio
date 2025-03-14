import ProjectCard from '../ui/ProjectCard';
import { useScrollAnimation } from '@/utils/animations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// ImageKit.io base URL
const imageKitBaseUrl = "https://ik.imagekit.io/cowboypanda";

const projects = [
  {
    title: 'CampusFusion',
    description: 'School ERP Dashboard with comprehensive management features for educational institutions.',
    tags: ['Web Development', 'JavaScript', 'UI/UX', 'Dashboard'],
    githubUrl: 'https://github.com/adivishnu-a/CampusFusion',
    imageUrl: `${imageKitBaseUrl}/Screenshot%20from%202025-03-14%2011-38-05.png`,
    liveUrl: '',
  },
  {
    title: 'iCho',
    description: 'Immersive Head Tracking Audio Experience, a volume adjustment assistant that adapts to your movement using Computer Vision.',
    tags: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision'],
    githubUrl: 'https://github.com/adivishnu-a/iCho',
    imageUrl: `${imageKitBaseUrl}/221834389-86a8884f-b594-4877-88cd-8976637acc73-0000.jpg`,
    liveUrl: '',
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: 'Analyzing Twitter data to extract insights using Spark and R for processing and visualization.',
    tags: ['Spark', 'R', 'Data Analysis', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/adivishnu-a/Twitter-Sentiment-Analysis',
    imageUrl: `${imageKitBaseUrl}/5882922014090573557.jpg`,
    liveUrl: '',
  },
  {
    title: 'ExamSystem',
    description: 'Java application that allows students to take exams and track performance, with administrator functionalities to manage tests.',
    tags: ['Java', 'OOP', 'Swing', 'File I/O'],
    githubUrl: 'https://github.com/adivishnu-a/ExamSystem',
    imageUrl: `${imageKitBaseUrl}/5853747916156548681.jpg`,
    liveUrl: '',
  },
];

const Projects = () => {
  const animation = useScrollAnimation(0.1, 'up');

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto" {...animation}>
        <h2 className="section-title">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Projects carousel */}
        <div className="mt-12">
          <Carousel
            opts={{
              align: "center",
              loop: false, // Changed from true to false to remove circular navigation
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="pb-8">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      imageUrl={project.imageUrl}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      index={index}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-6 bg-transparent">
              <CarouselPrevious className="static h-12 w-12 shadow-none border-primary/40 bg-background/80 hover:bg-background" />
              <CarouselNext className="static h-12 w-12 shadow-none border-primary/40 bg-background/80 hover:bg-background" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;