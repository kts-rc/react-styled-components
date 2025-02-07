
import { HeaderSection, LogoImage } from '../styles/Header.styles';

const Header = () => {
    return (
        <HeaderSection>
            <LogoImage src="https://placehold.co/10x10/orange/white" alt="Header Logo" />
            <h2>My Portfolio</h2>
        </HeaderSection>
    );
};

export default Header;