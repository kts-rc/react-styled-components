import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.background};
`;

export const ProjectsContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const ProjectsHeader = styled.div`
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

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1.5rem;
    }
`;
