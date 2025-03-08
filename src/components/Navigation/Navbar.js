// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logoImage from '../../assets/flickco-logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="logo">
          {logoError ? (
            <div className="fallback-logo">
              FlickCo
            </div>
          ) : (
            <img 
              src={logoImage} 
              alt="Flickco Logo" 
              onError={() => setLogoError(true)}
            />
          )}
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      <button 
        className="mobile-menu-button" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
        <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;