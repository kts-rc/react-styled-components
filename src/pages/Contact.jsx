import { 
    ContactContainer, 
    ContactContent, 
    ContactHeader,
    ContactForm,
    FormGroup,
    StyledInput,
    StyledTextArea,
    SubmitButton,
    ContactInfo,
    SocialLinks,
    SocialLink
} from '../styles/Contact.styles';

const ContactSectionContent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        });
    };

    return (
        <ContactContainer>
            <ContactContent>
                <ContactHeader>
                    <h1>Contact</h1>
                    <p>Get in touch</p>
                </ContactHeader>

                <ContactInfo>
                    <div>
                        <h3>Connect with me</h3>
                        <SocialLinks>
                            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </SocialLink>
                            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </SocialLink>
                        </SocialLinks>
                    </div>
                </ContactInfo>

                <ContactForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <StyledInput 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            placeholder="Your name"
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="email">Email</label>
                        <StyledInput 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="Your email"
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="message">Message</label>
                        <StyledTextArea 
                            id="message" 
                            name="message" 
                            required 
                            placeholder="Your message"
                            rows="4"
                        />
                    </FormGroup>

                    <SubmitButton type="submit">
                        Send
                    </SubmitButton>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    );
};

export default ContactSectionContent;
