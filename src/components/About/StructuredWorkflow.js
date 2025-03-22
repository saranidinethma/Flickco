import React, { useEffect, useState } from 'react';
import { FaProjectDiagram, FaClock, FaGlobe } from 'react-icons/fa';
import styled from 'styled-components';
import TrustedBy from './TrustedBy'; // Adjust the import path if needed


// Styled Components
const WorkflowSection = styled.section`
  padding: clamp(80px, 12vh, 120px) 0;
  background: linear-gradient(135deg, #2c2c2c 0%, #383737 50%, #2c2c2c 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(230, 92, 0, 0.05) 0%, transparent 70%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const TitleContainer = styled.div`
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #e65c00;
    border-radius: 3px;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  color: #e65c00;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const MainTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-content: center;
  
  @media (max-width: 900px) {
    gap: 20px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  background: linear-gradient(145deg, #4d4c4c 0%, #3a3939 100%);
  border-radius: 20px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: #e65c00;
    transition: height 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    &::before {
      height: 100%;
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(230, 92, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    background: rgba(230, 92, 0, 0.2);
    transform: scale(1.1);
  }
`;

const Icon = styled.div`
  font-size: 2.2rem;
  color: #e65c00;
`;

const Number = styled.div`
  font-size: 3.5rem;
  color: #e65c00;
  font-weight: 700;
  margin: 10px 0;
  position: relative;
  
  &::after {
    content: '+';
    font-size: 2rem;
    position: absolute;
    top: 5px;
    margin-left: 5px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin: 15px 0;
  font-weight: 600;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
  margin-top: auto;
`;

const StructuredWorkflow = () => {
  // State for dynamic numbers
  const [projects, setProjects] = useState(0);
  const [hours, setHours] = useState(0);
  const [presence, setPresence] = useState(0);

  // Number animation effect
  useEffect(() => {
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
  }, []);

  return (
    <WorkflowSection>
      <Container>
        <TitleContainer>
          <SubTitle>How We've</SubTitle>
          <MainTitle>Structured Our Workflow</MainTitle>
        </TitleContainer>
        
        <CardsContainer>
          <Card>
            <IconContainer>
              <Icon>
                <FaProjectDiagram />
              </Icon>
            </IconContainer>
            <Number>{projects}</Number>
            <CardTitle>Successful Projects Completed</CardTitle>
            <CardDescription>
              Our team has successfully completed over 100 projects, delivering innovative solutions.
            </CardDescription>
          </Card>
          
          <Card>
            <IconContainer>
              <Icon>
                <FaClock />
              </Icon>
            </IconContainer>
            <Number>{hours}</Number>
            <CardTitle>Hours of Development and Design</CardTitle>
            <CardDescription>
              We have dedicated countless hours to perfecting our craft, ensuring top quality.
            </CardDescription>
          </Card>
          
          <Card>
            <IconContainer>
              <Icon>
                <FaGlobe />
              </Icon>
            </IconContainer>
            <Number>{presence}</Number>
            <CardTitle>Global Presence</CardTitle>
            <CardDescription>
              We serve clients globally, delivering reliable and consistent services.
            </CardDescription>
          </Card>
        </CardsContainer>
        <br>
        </br>
        <br></br>
        <br></br><br></br>
        <TrustedBy/>
      </Container>
    </WorkflowSection>
  );
};

export default StructuredWorkflow;