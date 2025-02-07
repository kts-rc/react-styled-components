import { 
    HeroContainer, 
    HeroContent, 
    Title, 
    Subtitle,
    Description,
    CallToAction,
    ActionButton 
} from '../styles/Hero.styles';
import { Link } from 'react-router-dom';

const HeroSectionContent = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Hi, I'm a Placeholder</Title>
                <Subtitle>Frontend Developer</Subtitle>
                <Description>
                    I build things for the web with a focus on user experience and clean code.
                </Description>
                <CallToAction>
                    <ActionButton as={Link} to="/projects">
                        View My Work
                    </ActionButton>
                    <ActionButton as={Link} to="/contact">
                        Get In Touch
                    </ActionButton>
                </CallToAction>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSectionContent;