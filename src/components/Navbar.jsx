import { Link } from 'react-router-dom';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import { NavbarContainer, NavLinks, NavLink, NavbarRight } from '../styles/Navbar.styles';

const Navbar = ({ currentTheme, setCurrentTheme }) => {
    return (
        <NavbarContainer>
            <Header />
            <NavbarRight>
                <NavLinks>
                    <NavLink as={Link} to="/">Home</NavLink>
                    <NavLink as={Link} to="/about">About</NavLink>
                    <NavLink as={Link} to="/projects">Projects</NavLink>
                    <NavLink as={Link} to="/contact">Contact</NavLink>
                </NavLinks>
                <ThemeToggle 
                    currentTheme={currentTheme} 
                    setCurrentTheme={setCurrentTheme}
                />
            </NavbarRight>
        </NavbarContainer>
    );
};

export default Navbar;
