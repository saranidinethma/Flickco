import React from 'react';
import styled from 'styled-components';
import StructuredWorkflow from './StructuredWorkflow';

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  order: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 4px solid #ff3c00;
    border-radius: 15px;
    z-index: 0;
  }
  
  @media (max-width: 992px) {
    order: 0;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
`;

const AboutText = styled.div`
  order: 0;
  
  @media (max-width: 992px) {
    order: 1;
    text-align: center;
  }
`;

const AboutTitle = styled.h1`
  font-size: 18px;
  color: #ff3c00;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  
  @media (max-width: 992px) {
    margin: 0 auto 10px;
  }
`;

const MainHeading = styled.h2`
  font-size: 3.5rem;
  color: #06114f;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    br {
      display: none;
    }
  }
`;

const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <AboutContent>
          <AboutImageWrapper>
            <AboutImage src="/about/about-Flickco.jpg" alt="About Flickco" />
          </AboutImageWrapper>
          <AboutText>
            <AboutTitle>About Us</AboutTitle>
            <MainHeading>
              Your Partner <br />
              in Digital <br />
              Strategy
            </MainHeading>
            <AboutDescription>
              At Flickco, we bring stories to life through cinematic visuals and compelling narratives. Specializing in high-quality video production, we craft stunning music videos, commercials, and creative projects that leave a lasting impact.
            </AboutDescription>
            <AboutDescription>
              From concept to final edit, we focus on capturing raw emotions, immersive storytelling, and striking aesthetics. Whether it's an intimate acoustic performance on the beach or a high-energy night shoot, Flickco delivers with precision and passion.
            </AboutDescription>
            <AboutDescription>
              Let's create something unforgettable together.<br></br>
            </AboutDescription>
          </AboutText>
        </AboutContent><br></br>
        <br></br>
        <br></br>
        <br></br>
        <StructuredWorkflow/>
      </Container>
    </Section>
  );
};

export default AboutSection;