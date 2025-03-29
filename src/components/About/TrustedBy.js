import React, { useEffect, useRef, useState } from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  const customers = [
    { id: 1, logo: '/logo/amberloom main logo png.png', alt: 'amberloom' },
    { id: 2, logo: '/logo/Aron Argo Logo png.png', alt: 'Aron Argo' },
    { id: 3, logo: '/logo/aron food main png.png', alt: 'aron food' },
    { id: 4, logo: '/logo/ausi wipe logo.png', alt: 'ausi wipe' },
    { id: 5, logo: '/logo/Burger galaxy TR.png', alt: 'Burger galaxy' },
    { id: 6, logo: '/logo/celebricuts logo png.png', alt: 'celebricuts' },
    { id: 7, logo: '/logo/DARKWINGS P.png', alt: 'darkwings' },
    { id: 8, logo: '/logo/DEEVOLVE c.png', alt: 'Deevove' },
    { id: 9, logo: 'logo/fair new.jpg', alt: 'fair new' },
    { id: 10, logo: '/logo/images (1).png', alt: 'images' },
    { id: 11, logo: '/logo/JELLO main png.png', alt: 'jelo' },
    { id: 12, logo: '/logo/JJ.png', alt: 'jj' },
    { id: 13, logo: '/logo/LOGO FINAL PNG.png', alt: 'logo final' },
    { id: 14, logo: '/logo/LOGO FOX trans.png', alt: 'logo fox' },
    { id: 15, logo: '/logo/Logo1.png', alt: 'logo1' },
    { id: 16, logo: '/logo/Logo zonder tekst onder.png', alt: 'zonder' },
    { id: 17, logo: '/logo/MCREATION.png', alt: 'mcreation' },
    { id: 18, logo: '/logo/NIMRASA C PNG.png', alt: 'nimrasa' },
    { id: 19, logo: '/logo/NUVUSA png black.png', alt: 'nuvusa' },
    { id: 20, logo: '/logo/RAMA.png', alt: 'rama' },
    { id: 21, logo: '/logo/Rochampton Logo Finel PNG.png', alt: 'rochampton' },
    { id: 23, logo: '/logo/SC png.png', alt: 'sc' },
    { id: 24, logo: '/logo/triangle.png', alt: 'traingle' },
    { id: 25, logo: '/logo/Truenorth PNG.png', alt: 'truenorth' },
    { id: 26, logo: '/logo/we neibhour LB png.png', alt: 'we neibhour' },
    { id: 27, logo: '/logo/WISE PNG.png', alt: 'wise x' },
  ];

  const containerRef = useRef(null);
  const logosRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  // Check if section is visible for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto scroll functionality
  useEffect(() => {
    if (!isVisible || !autoScroll) return;
    
    let scrollInterval;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (logosRef.current) {
          const scrollWidth = logosRef.current.scrollWidth;
          const clientWidth = logosRef.current.clientWidth;
          const currentScroll = logosRef.current.scrollLeft;
          
          if (currentScroll + clientWidth >= scrollWidth) {
            // Reset to beginning when reached end
            logosRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            logosRef.current.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      }, 3000);
    };
    
    startAutoScroll();
    
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isVisible, autoScroll]);

  // Scroll functionality for the carousel
  const scrollLeft = () => {
    if (logosRef.current) {
      logosRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setAutoScroll(false);
    }
  };

  const scrollRight = () => {
    if (logosRef.current) {
      logosRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setAutoScroll(false);
    }
  };

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  return (
    <div 
      className={`trusted-by-container ${isVisible ? 'fade-in' : ''}`} 
      ref={containerRef}
    >
      <h2 className="trusted-by-title">
        Trusted by over <span className="highlight">50+</span> customers
      </h2>
      <div 
        className="carousel" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <button className="arrow left" onClick={scrollLeft}>←</button>
        <div className="logos" ref={logosRef}>
          {customers.map((customer) => (
            <img
              key={customer.id}
              src={customer.logo}
              alt={customer.alt}
              className={`customer-logo ${isVisible ? 'visible' : ''}`}
              loading="lazy"
            />
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>→</button>
      </div>
    </div>
  );
};

export default TrustedBy;