import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../../assets/flickco-logo.jpg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.scrolled ? '70px' : '130px'};
  display: flex;
  justify-content: ${props => props.scrolled ? 'center' : 'space-between'};
  align-items: center;
  padding: 0 80px;
  background: ${props => props.scrolled ? props.theme.colors.white : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? `1px solid ${props.theme.colors.lightGray3}` : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none'};
  transition: all 0.4s ease-in-out;
  z-index: 1000;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 30px;
    height: ${props => props.scrolled ? '60px' : '110px'};
    justify-content: ${props => props.scrolled ? 'center' : 'space-between'};
  }
`;

const Logo = styled(Link)`
  display: ${props => props.scrolled ? 'none' : 'flex'};
  align-items: center;
  height: 200px;
  text-decoration: none;
  padding: 10px 0;
  
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 85px;
    padding: 8px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin-left: ${props => props.scrolled ? '0' : '80px'};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGray};
  text-decoration: none;
  padding: 5px 0;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  padding: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 110px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.08);
    
    ${NavLink} {
      padding: 16px 30px;
      font-size: 18px;
      width: 100%;
      text-align: center;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 126, 0, 0.05);
      }

      &::after {
        display: none;
      }
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo to="/" scrolled={scrolled}>
        <img src={logoImage} alt="Flickco Logo" />
      </Logo>
      
      <NavLinks scrolled={scrolled}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>

      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
