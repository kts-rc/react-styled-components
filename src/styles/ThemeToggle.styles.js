import styled from 'styled-components';

export const ThemeToggleContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ThemeButton = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.textGreen};
    background-color: ${({ isActive, theme }) => 
        isActive ? theme.textGreen : 'transparent'};
    color: ${({ isActive, theme }) => 
        isActive ? 'white' : theme.textSimple};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.textGreen};
        color: white;
    }
`; 