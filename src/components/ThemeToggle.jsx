import { ThemeToggleContainer, ThemeButton } from '../styles/ThemeToggle.styles';

const ThemeToggle = ({ currentTheme, setCurrentTheme }) => {
    return (
        <ThemeToggleContainer>
            <ThemeButton 
                isActive={currentTheme === 'light'}
                onClick={() => setCurrentTheme('light')}
            >
                Light
            </ThemeButton>
            <ThemeButton 
                isActive={currentTheme === 'dark'}
                onClick={() => setCurrentTheme('dark')}
            >
                Dark
            </ThemeButton>
        </ThemeToggleContainer>
    );
};

export default ThemeToggle; 