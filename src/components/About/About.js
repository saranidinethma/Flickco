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

const Button = styled.button`
  background: #ff3c00;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background: #d32f2f;
  }
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background: #fff;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const TeamTitle = styled.h2`
  color: #1a237e;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 20px;
  gap: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const MemberInfo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin-bottom: 8px;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #f85050;
  margin-bottom: 10px;
`;

const About = ({ showExperts }) => {
  const teamMembers = [
    { name: 'Dihan Jayasooriya', role: 'Creative Director', image: '/team/Dihan.jpg' },
    { name: 'Adeesha Fernando', role: 'Director of Photography', image: '/team/Adeesha.jpg' },
    { name: 'Mario Lowe', role: 'Graphics Designer', image: '/team/Mario.jpg' },
    { name: 'Supun Lowe', role: 'Marketing Manager', image: '/team/supun.jpg' },
    { name: 'Shavinda Fernando', role: 'Social Media Marketing', image: '/team/Shavinda.jpg' },
    { name: 'Sarani Liyanage', role: 'UI/UX Designer', image: '/team/sarani.jpg' },
    { name: 'Nimesh De Silva', role: 'Aerial Photography & Videography', image: '/team/nimesh.jpg' },
  ];

  return (
    <>
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

      {/* Our Experts Section */}
      <TeamSection visible={showExperts}>
        <Container>
          <TeamHeader>
            <TeamTitle>Our Experts</TeamTitle>
          </TeamHeader>

          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamMember key={member.name}>
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
    </>
  );
};

export default About;
