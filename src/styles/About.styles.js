import styled from 'styled-components';

export const AboutContainer = styled.div`
    min-height: 100vh;
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.background};
`;

export const AboutContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const AboutHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    h1 {
        color: ${({ theme }) => theme.textHightlight};
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: ${({ theme }) => theme.textSimple};
        font-size: 1.2rem;
    }
`;

export const BioSection = styled.section`
    margin-bottom: 4rem;

    h2 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1.5rem;
    }

    p {
        color: ${({ theme }) => theme.textSimple};
        line-height: 1.6;
        margin-bottom: 1rem;
    }
`;

export const SkillsSection = styled.section`
    margin-bottom: 4rem;

    h2 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1.5rem;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
`;

export const SkillCategory = styled.div`
    h3 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const SkillItem = styled.span`
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.textSimple};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.textGreen};

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
        transform: translateY(-2px);
    }
`;

export const ExperienceSection = styled.section`
    margin-bottom: 4rem;

    h2 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1.5rem;
    }
`;

export const ExperienceItem = styled.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 0.5rem;
    }

    .company {
        color: ${({ theme }) => theme.textGreen};
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .period {
        color: ${({ theme }) => theme.textSimple};
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    ul {
        color: ${({ theme }) => theme.textSimple};
        padding-left: 1.5rem;
        
        li {
            margin-bottom: 0.5rem;
            line-height: 1.4;
        }
    }
`;

