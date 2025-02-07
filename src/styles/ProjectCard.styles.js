import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProjectContent = styled.div`
    padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
    color: ${({ theme }) => theme.textHightlight};
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme }) => theme.textSimple};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`;

export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
`;

export const TechItem = styled.span`
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.textSimple};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid ${({ theme }) => theme.textGreen};

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
    }
`;

export const ProjectLinks = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    a {
        color: ${({ theme }) => theme.textHightlight};
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid ${({ theme }) => theme.textGreen};
        border-radius: 4px;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: ${({ theme }) => theme.textGreen};
            color: white;
        }

        @media (max-width: 768px) {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
        }
    }
`;
