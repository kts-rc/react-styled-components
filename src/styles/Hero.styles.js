import styled from 'styled-components';

export const HeroContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.background};
`;

export const HeroContent = styled.div`
    max-width: 800px;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.textHightlight};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.textGreen};
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textSimple};
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
`;

export const CallToAction = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ActionButton = styled.button`
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.textSimple};
    border: 1px solid ${({ theme }) => theme.textGreen};
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`;