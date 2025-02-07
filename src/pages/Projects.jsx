import { 
    ProjectsContainer, 
    ProjectsContent, 
    ProjectsHeader,
    ProjectsGrid 
} from '../styles/Projects.styles';
import ProjectCard from '../components/ProjectCard';

const ProjectsSectionContent = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and styled-components.",
            image: "https://placehold.co/600x400",
            techStack: ["React", "Styled Components", "React Router"],
            githubUrl: "https://github.com/yourusername/portfolio"
        },
        {
            title: "Weather App",
            description: "A simple weather application using OpenWeather API.",
            image: "https://placehold.co/600x400",
            techStack: ["React", "API Integration", "CSS"],
            githubUrl: "https://github.com/yourusername/weather-app"
        }
    ];

    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsHeader>
                    <h1>Projects</h1>
                    <p>Some things I've built</p>
                </ProjectsHeader>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </ProjectsGrid>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default ProjectsSectionContent;
