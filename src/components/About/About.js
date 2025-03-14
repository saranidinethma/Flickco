import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 120px 0 60px;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 42px;
  color: #0a0f2c;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  h2 {
    font-size: 36px;
    color: #0a0f2c;
    margin-bottom: 25px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 20px;
  }
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const TeamSubtitle = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(255, 85, 0, 0.1);
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TeamTitle = styled.h2`
  color: #0a0f2c;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TeamMember = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(255, 77, 77, 0.9), transparent);
    z-index: 1;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: white;
  z-index: 2;
  text-align: left;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 5px 0;
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
`;

const VisionSection = styled.section`
  padding: 80px 0;
  background: #fff;
  text-align: center;
`;

const VisionQuote = styled.h2`
  font-size: 36px;
  color: #0a0f2c;
  max-width: 800px;
  margin: 0 auto 30px;
  font-weight: bold;
`;

const VisionText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const About = () => {
  const teamMembers = [
    {
      name: 'Supun Lowe',
      role: 'Marketing Manager',
      image: '/team/supun.jpg'
    },
    {
      name: 'Sarani Liyanage',
      role: 'UI/UX Designer',
      image: '/team/sarani.jpg'
    },
    {
      name: 'Mario Lowe',
      role: 'Graphics designer (creative designer/ multimedia designer) , ',
      image: '/team/Mario.jpg'
    },
    {
      name: 'Dihan Jayasooriya',
      role: 'Creative director ( visual director / art director)',
      image: '/team/Dihan.jpg'
    },
    {
      name: 'Adeesha Fernando',
      role: 'Director of photography ( cinematography/ photography)',
      image: '/team/Adeesha.jpg'
    },
    {
      name: 'Shavinda Fernando',
      role: 'Social media marketing (paid advertising specialist/ social media strategist)',
      image: '/team/Shavinda.jpg'
    },
    
    {
      name: 'Nimesh De Silva',
      role: 'Arial Photography and Vediography',
      image: ''
    }

  ];

  return (
    <>
      <AboutSection>
        <Container>
          <PageTitle>About Us</PageTitle>
          <AboutContent>
            <AboutImage src="/about/4669613.jpg" alt="About Flickco" />
            <AboutText>
              <h2>Your Partner in Digital Strategy</h2>
              <p>
              About Us

              At Flickco, we bring stories to life through cinematic visuals and compelling narratives. Specializing in high-quality video production, we craft stunning music videos, commercials, and creative projects that leave a lasting impact.

From concept to final edit, we focus on capturing raw emotions, immersive storytelling, and striking aesthetics. Whether it’s an intimate acoustic performance on the beach or a high-energy night shoot,Flickco delivers with precision and passion.

Let’s create something unforgettable together.
              </p>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutSection>

      <TeamSection>
        <Container>
          <TeamHeader>
            <TeamSubtitle>Management</TeamSubtitle>
            <TeamTitle>Our Experts</TeamTitle>
          </TeamHeader>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MemberImage src={member.image} alt={member.name} />
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                </MemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>

      <VisionSection>
        <Container>
          <VisionQuote>"Start your journey that  never ends"</VisionQuote>
          <VisionText>
            We are committed to understanding your project vision and partnering with you to bring it to life. 
            Whether you're starting with a concept or a detailed plan, we are here to fuel you on the journey.
          </VisionText>
        </Container>
      </VisionSection>
    </>
  );
};

export default About;
