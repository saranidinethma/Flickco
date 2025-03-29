// Updated Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // We'll keep using your CSS file but modify it
import logoImage from '../../assets/flickco-logo.jpg';

const Navbar = ({ onAboutClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const location = useLocation();

  // Handle scroll direction and position for smart navbar
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    
    // Show/hide navbar based on scroll direction
    setVisible(
      (prevScrollPos > currentScrollPos) || // Scrolling up
      currentScrollPos < 100 // At top of page
    );
    
    setPrevScrollPos(currentScrollPos);
    
    // Change navbar style after threshold
    setScrolled(currentScrollPos > 50);
  }, [prevScrollPos]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Add custom class for visibility
  const navbarClasses = `nav ${scrolled ? 'scrolled' : ''} ${!visible ? 'nav-hidden' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="logo-container">
        <Link to="/" className="logo">
          {logoError ? (
            <div className="fallback-logo">
              <span>Flick</span>Co
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
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
        <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={onAboutClick}>
          About Us
        </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        
        
      </div>

      <button
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            {logoError ? (
              <div className="fallback-logo">FlickCo</div>
            ) : (
              <img src={logoImage} alt="Flickco Logo" className="mobile-logo-img" />
            )}
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-close-button"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="mobile-links-container">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About Us
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          
          
        </div>
        
        <div className="mobile-footer">
          <p>© 2025 FlickCo. All rights reserved.</p>
        </div>
      </div>

      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;