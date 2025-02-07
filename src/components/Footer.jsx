import { 
    FooterContainer, 
    FooterContent, 
    FooterSection, 
    SocialLinks, 
    SocialLink,
    FooterBottom 
} from '../styles/Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h3>Connect</h3>
                    <SocialLinks>
                        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </SocialLink>
                        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </SocialLink>
                        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </SocialLink>
                    </SocialLinks>
                </FooterSection>
            </FooterContent>
            
            <FooterBottom>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
