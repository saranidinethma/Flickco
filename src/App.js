import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Core Components
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';  // About for any other use
import Contact from './components/Contact/Contact';

// Experts (Team) Page
import Experts from './components/Experts/Experts';  // The Experts page, shown when About Us is clicked

// Portfolio Components
import Portfolio from './components/Portfolio/Portfolio';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />  {/* Display About.js after Services */}
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar /> {/* Navbar with links */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />  {/* Portfolio only shown here */}
          {/* Experts page only when /about is clicked */}
          <Route path="/about" element={<Experts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
