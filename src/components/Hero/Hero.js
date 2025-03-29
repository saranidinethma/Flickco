"use client"
import { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"

// Video background container
const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`

// Overlay to ensure text readability
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.7) 0%, 
    rgba(155, 85, 0, 0.5) 40%, 
    rgba(255, 126, 0, 0.4) 90%
  );
  z-index: 0;
`

const HeroSection = styled.section`
  height: 100vh;
  min-height: 550px; /* Ensure minimum height on small screens */
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 20px;
    text-align: center;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0 15px;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  z-index: 1;
  position: relative;
  padding: 20px 0;
  
  @media (max-height: 600px) {
    margin-top: 60px; /* Add space at top for very short screens */
  }
`

const WelcomeText = styled(motion.p)`
  font-size: 22px;
  color: #ff7e00;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }
`

const Title = styled(motion.h1)`
  font-size: 76px;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  
  span {
    color: #ff7e00;
    display: inline-block;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 36px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 320px) {
    font-size: 28px;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 22px;
  margin-bottom: 50px;
  max-width: 650px;
  line-height: 1.6;
  opacity: 0.95;
  color: ${(props) => props.theme.colors.lightGray};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    margin: 0 auto 40px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    margin: 0 auto 30px;
    line-height: 1.4;
  }
  
  @media (max-height: 600px) {
    margin-bottom: 20px;
  }
`

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`

const CTAButton = styled(motion(Link))`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 18px 35px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(255, 128, 0, 0.47);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 126, 0, 0.5);
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 15px 30px;
    font-size: 16px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 14px 20px;
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`

const SecondaryButton = styled(motion(Link))`
  background: transparent;
  color: white;
  padding: 16px 33px;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 13px 28px;
    font-size: 16px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 12px 20px;
    font-size: 16px;
    width: 100%;
    text-align: center;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
    opacity: 0.7;
  }
  
  span {
    color: white;
    font-size: 14px;
    margin-top: 8px;
    opacity: 0.7;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    bottom: 15px;
    
    svg {
      width: 24px;
      height: 24px;
    }
    
    span {
      font-size: 12px;
      margin-top: 5px;
    }
  }
  
  @media (max-height: 600px) {
    display: none; /* Hide on very short screens */
  }
`

const ShapeDecoration = styled.div`
  position: absolute;
  bottom: -50px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,126,0,0.2) 0%, rgba(255,126,0,0) 70%);
  border-radius: 50%;
  z-index: 0;
  
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
    bottom: -30px;
    right: -50px;
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
    opacity: 0.7;
  }
`

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Add a media query to detect viewport orientation/size for optimized animations
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Optimize animations for mobile
  const getAnimationDelay = () => {
    return isMobile() ? 1 : 1.5;
  };

  return (
    <HeroSection ref={ref}>
      {/* Video Background */}
      <VideoBackground>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src="/hero/0329(2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <Overlay />
      </VideoBackground>

      <ShapeDecoration />

      {/* Hero Content */}
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <WelcomeText variants={itemVariants}>
            WELCOME TO FLICKCO
          </WelcomeText>
          <Title variants={itemVariants}>
            Fueling <span>Digital Growth</span> 
          </Title>
          <Subtitle variants={itemVariants}>
            We transform bold ideas into powerful digital experiences, designed to elevate your brand and accelerate your business in the digital landscape.
          </Subtitle>
          <ButtonContainer variants={itemVariants}>
            <CTAButton
              to="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Services
            </CTAButton>
            <SecondaryButton
              to="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </SecondaryButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>

      {/* Scroll Indicator */}
      <ScrollIndicator 
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: getAnimationDelay(), duration: 0.8 } 
        }}
        whileHover={{ y: [0, -5, 0], transition: { duration: 1, repeat: Infinity } }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;