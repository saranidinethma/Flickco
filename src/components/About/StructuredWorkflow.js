

import React, { useEffect, useState, useRef } from 'react';
import { FaProjectDiagram, FaClock, FaGlobe } from 'react-icons/fa';
import TrustedBy from './TrustedBy'; // Adjust the import path if needed

const StructuredWorkflow = () => {
  // State for dynamic numbers
  const [projects, setProjects] = useState(0);
  const [hours, setHours] = useState(0);
  const [presence, setPresence] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Check if section is visible for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Number animation effect
  useEffect(() => {
    if (!isVisible) return;

    const animateNumber = (setNumber, target, duration = 2000) => {
      let startTime;
      let animationFrame;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = easeOutQuad(progress);
        
        setNumber(Math.floor(easeProgress * target));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setNumber(target);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
      
      return () => cancelAnimationFrame(animationFrame);
    };
    
    // Easing function for smoother animation
    const easeOutQuad = (x) => {
      return 1 - (1 - x) * (1 - x);
    };

    const cleanup1 = animateNumber(setProjects, 100, 2000);
    const cleanup2 = animateNumber(setHours, 567, 2500);
    const cleanup3 = animateNumber(setPresence, 100, 2000);
    
    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="workflow-section"
    >
      <div className="container">
        <div className="title-container">
          <h3 className="sub-title">How We've</h3>
          <h2 className="main-title">Structured Our Workflow</h2>
        </div>
        
        <div className="cards-container">
          <div className={`card ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0s'}}>
            <div className="icon-container">
              <div className="icon">
                <FaProjectDiagram />
              </div>
            </div>
            <div className="number">{projects}</div>
            <h3 className="card-title">Successful Projects Completed</h3>
            <p className="card-description">
              Our team has successfully completed over 100 projects, delivering innovative solutions.
            </p>
          </div>
          
          <div className={`card ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.2s'}}>
            <div className="icon-container">
              <div className="icon">
                <FaClock />
              </div>
            </div>
            <div className="number">{hours}</div>
            <h3 className="card-title">Hours of Development and Design</h3>
            <p className="card-description">
              We have dedicated countless hours to perfecting our craft, ensuring top quality.
            </p>
          </div>
          
          <div className={`card ${isVisible ? 'animate' : ''}`} style={{animationDelay: '0.4s'}}>
            <div className="icon-container">
              <div className="icon">
                <FaGlobe />
              </div>
            </div>
            <div className="number">{presence}</div>
            <h3 className="card-title">Global Presence</h3>
            <p className="card-description">
              We serve clients globally, delivering reliable and consistent services.
            </p>
          </div>
        </div>
        <br></br>
        <br>
        </br><br></br>
        
        <TrustedBy/>
      </div>
    </section>
  );
};

export default StructuredWorkflow;