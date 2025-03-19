import React, { useEffect, useState } from 'react';
import './StructuredWorkflow.css';
import { FaProjectDiagram, FaClock, FaGlobe } from 'react-icons/fa';

const StructuredWorkflow = () => {
  // State for dynamic numbers
  const [projects, setProjects] = useState(0);
  const [hours, setHours] = useState(0);
  const [presence, setPresence] = useState(0);

  // Number animation effect
  useEffect(() => {
    const animateNumber = (setNumber, target) => {
      let current = 0;
      const increment = target / 100;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setNumber(target);
          clearInterval(interval);
        } else {
          setNumber(Math.floor(current));
        }
      }, 20); // Speed of animation
    };

    animateNumber(setProjects, 100); // Target number of projects
    animateNumber(setHours, 567);    // Target number of hours
    animateNumber(setPresence, 100); // Target number of global presence
  }, []);

  return (
    <div className="workflow-container">
      <h3 className="workflow-title">
        <span className="highlight">How We’ve</span>
        <br />
        <h1>Structured Our Workflow</h1>
      </h3>
      <div className="workflow-cards">
        <div className="workflow-card">
          <div className="workflow-icon">
            <FaProjectDiagram />
          </div>
          <div className="workflow-number">{projects}+</div>
          <h3>Successful Projects Completed</h3>
          <p>
            Our team has successfully completed over 100 projects, delivering innovative solutions.
          </p>
        </div>
        <div className="workflow-card">
          <div className="workflow-icon">
            <FaClock />
          </div>
          <div className="workflow-number">{hours}+</div>
          <h3>Hours of Development and Design</h3>
          <p>
            We have dedicated countless hours to perfecting our craft, ensuring top quality.
          </p>
        </div>
        <div className="workflow-card">
          <div className="workflow-icon">
            <FaGlobe />
          </div>
          <div className="workflow-number">{presence}+</div>
          <h3>Global Presence</h3>
          <p>
            We serve clients globally, delivering reliable and consistent services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StructuredWorkflow;
