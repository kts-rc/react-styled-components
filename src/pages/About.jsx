import { 
    AboutContainer, 
    AboutContent, 
    AboutHeader, 
    SkillsSection,
    SkillCategory,
    SkillList,
    SkillItem,
    BioSection,
    ExperienceSection,
    ExperienceItem
} from '../styles/About.styles';

const AboutSectionContent = () => {
    const skills = {
        frontend: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
        backend: ['Node.js', 'Python', 'Express'],
        tools: ['Git', 'VS Code', 'Docker']
    };

    return (
        <AboutContainer>
            <AboutContent>
                <AboutHeader>
                    <h1>About Me</h1>
                    <p>Aspiring developer keen on learning new technologies</p>
                </AboutHeader>

                <BioSection>
                    <h2>Bio</h2>
                    <p>
                        Newbie developer with a passion for learning and improving my skills.
                        Playing around with React, TypeScript, Node.js, and Python.
                    </p>
                    <p>
                        When I'm not coding, you will find me trekking in western ghats.
                    </p>
                </BioSection>

                <SkillsSection>
                    <h2>Skills</h2>
                    <div>
                        <SkillCategory>
                            <h3>Frontend</h3>
                            <SkillList>
                                {skills.frontend.map((skill, index) => (
                                    <SkillItem key={index}>{skill}</SkillItem>
                                ))}
                            </SkillList>
                        </SkillCategory>

                        <SkillCategory>
                            <h3>Backend</h3>
                            <SkillList>
                                {skills.backend.map((skill, index) => (
                                    <SkillItem key={index}>{skill}</SkillItem>
                                ))}
                            </SkillList>
                        </SkillCategory>

                        <SkillCategory>
                            <h3>Tools & Technologies</h3>
                            <SkillList>
                                {skills.tools.map((skill, index) => (
                                    <SkillItem key={index}>{skill}</SkillItem>
                                ))}
                            </SkillList>
                        </SkillCategory>
                    </div>
                </SkillsSection>

                <ExperienceSection>
                    <h2>Experience</h2>
                    <ExperienceItem>
                        <h3>Frontend Developer</h3>
                        <p className="company">Tech Company Inc.</p>
                        <p className="period">2023 - Present</p>
                        <ul>
                            <li>Building responsive web applications with React</li>
                            <li>Learning and implementing modern web technologies</li>
                        </ul>
                    </ExperienceItem>
                </ExperienceSection>
            </AboutContent>
        </AboutContainer>
    );
};

export default AboutSectionContent;
