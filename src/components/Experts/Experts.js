import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #06114f;
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #ff3c00;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 40px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
  
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

const AboutTag = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #ff3c00;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  padding: 5px 10px;
  background-color: rgba(255, 60, 0, 0.1);
  border-radius: 4px;
  
  @media (max-width: 992px) {
    margin: 0 auto 15px;
  }
`;

const MainHeading = styled.h1`
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
  font-size: 17px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const LeadershipSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const LeaderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const LeaderImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff3c00;
`;

const LeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeaderTitle = styled.h3`
  font-size: 1.15rem;
  color: #06114f;
  font-weight: bold;
  margin: 0;
`;

const LeaderRole = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0 0;
`;

const SliderWrapper = styled.div`
  margin-top: 60px;
  
  .slick-dots li button:before {
    font-size: 10px;
    color: #ff3c00;
  }
  
  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    
    &:before {
      color: #ff3c00;
      font-size: 20px;
      line-height: 40px;
    }
  }
  
  .slick-prev {
    left: -20px;
  }
  
  .slick-next {
    right: -20px;
  }
  
  @media (max-width: 768px) {
    .slick-prev {
      left: 0px;
    }
    
    .slick-next {
      right: 0px;
    }
  }
`;

const ExpertCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  margin: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ExpertImageWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff3c00, #ff7e00);
    opacity: 0.2;
    z-index: 0;
  }
`;

const ExpertImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const ExpertName = styled.h4`
  font-size: 1.4rem;
  color: #06114f;
  font-weight: bold;
  margin: 0 0 5px;
`;

const ExpertRole = styled.p`
  font-size: 1rem;
  color: #ff3c00;
  margin: 0;
  font-weight: 500;
`;

const Experts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const experts = [
    { name: 'Expert 1', role: 'Role 1', img: '/Experts/expert1.jpg' },
    { name: 'Expert 2', role: 'Role 2', img: '/Experts/expert2.jpg' },
    { name: 'Expert 3', role: 'Role 3', img: '/Experts/expert3.jpg' },
    { name: 'Expert 4', role: 'Role 4', img: '/Experts/expert4.jpg' },
    { name: 'Expert 5', role: 'Role 5', img: '/Experts/expert5.jpg' },
    { name: 'Expert 6', role: 'Role 6', img: '/Experts/expert6.jpg' },
    { name: 'Expert 7', role: 'Role 7', img: '/Experts/expert7.jpg' },
  ];

  return (
    <Section>
      <Container>
        <AboutContent>
          <AboutImageWrapper>
            <AboutImage src="/about/about-Flickco.jpg" alt="About Flickco" />
          </AboutImageWrapper>
          <AboutText>
            <AboutTag>About Us</AboutTag>
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
              Let's create something unforgettable together.
            </AboutDescription>
            
            <LeadershipSection>
              <LeaderCard>
                <LeaderImage src="/Experts/Dihan.jpg" alt="CEO" />
                <LeaderInfo>
                  <LeaderTitle>Dihan Jayasooriya</LeaderTitle>
                  <LeaderRole>Chief Executive Officer (CEO)</LeaderRole>
                </LeaderInfo>
              </LeaderCard>

              <LeaderCard>
                <LeaderImage src="/Experts/Adeesha.jpg" alt="CTO" />
                <LeaderInfo>
                  <LeaderTitle>Adeesha Perera</LeaderTitle>
                  <LeaderRole>Chief Technology Officer (CTO)</LeaderRole>
                </LeaderInfo>
              </LeaderCard>
            </LeadershipSection>
          </AboutText>
        </AboutContent>

        <SectionTitle>Meet Our Experts</SectionTitle>
        <SliderWrapper>
          <Slider {...settings}>
            {experts.map((expert, index) => (
              <div key={index}>
                <ExpertCard>
                  <ExpertImageWrapper>
                    <ExpertImage src={expert.img} alt={expert.name} />
                  </ExpertImageWrapper>
                  <ExpertName>{expert.name}</ExpertName>
                  <ExpertRole>{expert.role}</ExpertRole>
                </ExpertCard>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
};

export default Experts;