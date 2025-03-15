
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Core Components
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

// Portfolio Components
import Portfolio from './components/Portfolio/Portfolio';

// Social Media Components
import SocialMediaGallery from './components/Portfolio/Categories/SocialMedia';
import PostsGallery from './components/Portfolio/Categories/SocialMedia/PostsGallery';
import ReelsGallery from './components/Portfolio/Categories/SocialMedia/ReelsGallery';

// Animation Components
import AnimationsGallery from './components/Portfolio/Categories/Animations';
import TwoDAnimationsGallery from './components/Portfolio/Categories/Animations/TwoDGallery';
import ThreeDAnimationsGallery from './components/Portfolio/Categories/Animations/ThreeDGallery';

// Photo & Video Components
import PhotoVideoGallery from './components/Portfolio/Categories/PhotoVideo';
import PhotographyGallery from './components/Portfolio/Categories/PhotoVideo/PhotographyGallery';
import VideographyGallery from './components/Portfolio/Categories/PhotoVideo/VideographyGallery';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
  </>
);

function App() {
  const [showExperts, setShowExperts] = useState(false);

  const handleAboutClick = () => {
    setShowExperts(true); // Toggle "Meet Our Experts" visibility on About page
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar onAboutClick={handleAboutClick} /> {/* Pass handleAboutClick to Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About showExperts={showExperts} />} />
          <Route path="/contact" element={<Contact />} />

          {/* Social Media Routes */}
          <Route path="/portfolio/social-media" element={<SocialMediaGallery />} />
          <Route path="/portfolio/social-media/posts" element={<PostsGallery />} />
          <Route path="/portfolio/social-media/reels" element={<ReelsGallery />} />

          {/* Animation Routes */}
          <Route path="/portfolio/animations" element={<AnimationsGallery />} />
          <Route path="/portfolio/animations/2d" element={<TwoDAnimationsGallery />} />
          <Route path="/portfolio/animations/3d" element={<ThreeDAnimationsGallery />} />

          {/* Photo & Video Routes */}
          <Route path="/portfolio/photo-video" element={<PhotoVideoGallery />} />
          <Route path="/portfolio/photo-video/photography" element={<PhotographyGallery />} />
          <Route path="/portfolio/photo-video/videography" element={<VideographyGallery />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
