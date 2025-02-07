import { 
    ProjectCardContainer, 
    ProjectImage, 
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    TechStack,
    TechItem,
    ProjectLinks
} from '../styles/ProjectCard.styles';

const ProjectCard = ({ project }) => {
    const { title, description, image, techStack, liveUrl, githubUrl } = project;

    return (
        <ProjectCardContainer>
            <ProjectImage src={image} alt={title} />
            <ProjectContent>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <TechStack>
                    {techStack.map((tech, index) => (
                        <TechItem key={index}>{tech}</TechItem>
                    ))}
                </TechStack>
                <ProjectLinks>
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                </ProjectLinks>
            </ProjectContent>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
