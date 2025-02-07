import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.background};
    padding: 2rem 0;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const FooterSection = styled.div`
    min-width: 250px;

    h3 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    p {
        color: ${({ theme }) => theme.textSimple};
        margin: 0.5rem 0;
        font-size: 0.9rem;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SocialLink = styled.a`
    color: ${({ theme }) => theme.textSimple};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    font-size: 0.9rem;

    &:hover {
        color: ${({ theme }) => theme.textGreen};
    }
`;

export const FooterBottom = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    p {
        color: ${({ theme }) => theme.textSimple};
        font-size: 0.8rem;
        margin: 0;
    }
`;
