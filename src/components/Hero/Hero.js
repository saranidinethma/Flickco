import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: linear-gradient(to right, #000000, #9b5500);
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 20px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: 1;
`;

const WelcomeText = styled(motion.p)`
  font-size: 18px;
  color: #e65c00;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`;

const Title = styled(motion.h1)`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  margin-bottom: 40px;
  max-width: 600px;
  opacity: 0.9;
  color: ${props => props.theme.colors.lightGray};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    margin: 0 auto 40px;
  }
`;

const CTAButton = styled(motion(Link))`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <WelcomeText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME TO FLICKCO
        </WelcomeText>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fueling Digital Growth
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transforming ideas in to reality
        </Subtitle>
        <CTAButton
          to="/services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started 
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
