"use client"

import React from "react"
import { Link } from "react-router-dom"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import logoImage from "../../assets/flickco-logo.jpg"
import "./Footer.css"

const Footer = () => {
  const [logoError, setLogoError] = React.useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo-container">
            {logoError ? (
              <div className="footer-fallback-logo">
                <span>Flick</span>Co
              </div>
            ) : (
              <img 
                className="footer-logo" 
                src={logoImage} 
                alt="Flickco Logo" 
                onError={() => setLogoError(true)} 
              />
            )}
          </div>
          <p className="footer-description">
            Professional video production services for businesses, events, and creative projects. We bring your vision
            to life with cinematic quality and storytelling expertise.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1A8rFJExTq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/flickco._?igsh=MXNqbmJ5aHhuZ3hkag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="links-list">
            <li className="link-item">
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li className="link-item">
              <Link to="/portfolio" className="footer-link">Portfolio</Link>
            </li>
            <li className="link-item">
              <Link to="/services" className="footer-link">Services</Link>
            </li>
            <li className="link-item">
              <Link to="/about" className="footer-link">About Us</Link>
            </li>
            <li className="link-item">
              <Link to="/contact" className="footer-link">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Our Services</h3>
          <ul className="links-list">
            <li className="link-item">
              <Link to="/services#commercial" className="footer-link">Cinematography</Link>
            </li>
            <li className="link-item">
              <Link to="/services#ui-ux" className="footer-link">UI/UX Design</Link>
            </li>
            <li className="link-item">
              <Link to="/services#music-video" className="footer-link">Music Video Production</Link>
            </li>
            <li className="link-item">
              <Link to="/services#videography" className="footer-link">VideoGraphy Photography</Link>
            </li>
            <li className="link-item">
              <Link to="/services#digital-marketing" className="footer-link">Digital Marketing</Link>
            </li>
            <li className="link-item">
              <Link to="/services#animation" className="footer-link">3D And Animation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span>Negombo, Sri Lanka</span>
            </p>
            <p className="contact-item">
              <span className="contact-icon">
                <FaPhone />
              </span>
              <span>(0775752653/0765816135)</span>
            </p>
            <p className="contact-item">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <span>flickcoprosocial@gmail.com</span>
            </p>
          </div>
          <Link to="/contact" className="cta-button">Get a Quote</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; {currentYear} FlickCo. All rights reserved.</p>
        <div className="bottom-links">
          <Link to="/privacy" className="bottom-link">Privacy Policy</Link>
          <Link to="/terms" className="bottom-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer