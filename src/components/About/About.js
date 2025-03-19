import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  max-width: 600px;
`;

const AboutTitle = styled.h1`
  font-size: 18px;
  color: #ff3c00;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 3.5rem;
  color: #06114f;
  font-weight: bold;
  line-height: 1.3;
`;

const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <AboutContent>
          <AboutImage src="/about/about-Flickco.jpg" alt="About Flickco" />
          <AboutText>
            <AboutTitle>About Us</AboutTitle>
            <MainHeading>
              Your Partner <br />
              in digital <br />
              Strategy
            </MainHeading>
            <AboutDescription>
              At Flickco, we bring stories to life through cinematic visuals and compelling narratives.
              Specializing in high-quality video production, we craft stunning music videos, commercials, 
              and creative projects that leave a lasting impact.
            </AboutDescription>
            <AboutDescription>
              From concept to final edit, we focus on capturing raw emotions, immersive storytelling, 
              and striking aesthetics. Whether it’s an intimate acoustic performance on the beach 
              or a high-energy night shoot, Flickco delivers with precision and passion.
            </AboutDescription>
            <AboutDescription>Let’s create something unforgettable together.</AboutDescription>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
