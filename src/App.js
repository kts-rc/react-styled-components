import {ThemeProvider, createGlobalStyle} from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutSectionContent from './pages/About';
import ProjectsSectionContent from './pages/Projects';
import ContactSectionContent from './pages/Contact';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

// This is a simple portfolio website built with React and styled-components.
// It will have the following sections:
// - Hero
// - About
// - Projects
// - Contact

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textSimple};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const theme = {
  dark:{
    background : '#161b1d',
    textSimple : "#C1E4F6",
    textHightlight : "#EBF8FF",
    textGreen: "#568C3B"
  },
  light:{
    background : '#dadada',
    textSimple : "#4e4e4e",
    textHightlight : "#008787",
    textGreen: "#005f00"
  }
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Router basename='/react-styled-components'>
        <div className="App">
          <Navbar 
            currentTheme={currentTheme} 
            setCurrentTheme={setCurrentTheme}
          />
          <Routes>
            <Route path="/about" element={<AboutSectionContent />} />
            <Route path="/projects" element={<ProjectsSectionContent />} />
            <Route path="/contact" element={<ContactSectionContent />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
