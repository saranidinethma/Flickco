import React from 'react';
import styled from 'styled-components';

// Styled Components
const ExpertsSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ExpertsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  margin-bottom: 80px;
`;

const ExpertsTitle = styled.h1`
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

const ExpertsDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-top: 20px;
`;

const Experts = () => (
  <ExpertsSection>
    <Container>
      <ExpertsContent>
        <ExpertsTitle>Meet Our Experts</ExpertsTitle>
        <MainHeading>Skilled Professionals</MainHeading>
        <ExpertsDescription>
          At Flickco, our experts are passionate about delivering exceptional work and cutting-edge strategies. Our team is composed of experienced professionals with expertise in various fields of digital media.
        </ExpertsDescription>
      </ExpertsContent>
    </Container>
  </ExpertsSection>
);

export default Experts;
