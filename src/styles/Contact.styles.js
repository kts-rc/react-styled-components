import styled from 'styled-components';

export const ContactContainer = styled.div`
    min-height: 100vh;
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.background};
`;

export const ContactContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const ContactHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h1 {
        color: ${({ theme }) => theme.textHightlight};
        font-size: 2.5rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        color: ${({ theme }) => theme.textSimple};
        font-size: 1.2rem;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0 1rem;
        }
    }
`;

export const ContactInfo = styled.div`
    margin-bottom: 3rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin: 0 1rem 2rem 1rem;
    }

    h3 {
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 1rem;
    }

    p {
        color: ${({ theme }) => theme.textSimple};
        margin-bottom: 0.5rem;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;

export const SocialLink = styled.a`
    color: ${({ theme }) => theme.textSimple};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.textGreen};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
        transform: translateY(-2px);
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }
`;

export const ContactForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin: 0 1rem;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    label {
        align-self: flex-start;
        color: ${({ theme }) => theme.textHightlight};
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme.textGreen};
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.textSimple};
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.textHightlight};
        box-shadow: 0 0 0 2px rgba(235, 248, 255, 0.1);
    }

    &::placeholder {
        color: ${({ theme }) => theme.textSimple}80;
    }
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme.textGreen};
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.textSimple};
    font-size: 1rem;
    resize: vertical;
    transition: all 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.textHightlight};
        box-shadow: 0 0 0 2px rgba(235, 248, 255, 0.1);
    }

    &::placeholder {
        color: ${({ theme }) => theme.textSimple}80;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.textSimple};
    border: 1px solid ${({ theme }) => theme.textGreen};
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
        transform: translateY(-2px);
    }
`;
