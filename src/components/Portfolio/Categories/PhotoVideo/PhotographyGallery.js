import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const Section = styled.section`
  padding: 80px 0;
  background: ${props => props.theme.colors.lightGray2};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.dark};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 3/2;
  box-shadow: ${props => props.theme.shadows.medium};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;

  h3 {
    margin: 0 0 8px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const PhotographyGallery = () => {
  const navigate = useNavigate();
  
  const photos = [
    {
      id: 1,
      title: 'Product Photography',
      image: '/images/portfolio/photo-video/photography/product.jpg',
      description: 'Professional product photography'
    },
    {
      id: 2,
      title: 'Event Coverage',
      image: '/images/portfolio/photo-video/photography/event.jpg',
      description: 'Corporate event photography'
    },
    {
      id: 3,
      title: 'Portrait Photography',
      image: '/images/portfolio/photo-video/photography/portrait.jpg',
      description: 'Professional portrait sessions'
    },
    {
      id: 4,
      title: 'Architecture Photography',
      image: '/images/portfolio/photo-video/photography/architecture.jpg',
      description: 'Architectural and interior photography'
    }
  ];

  return (
    <Section>
      <Container>
        <BackButton
          onClick={() => navigate('/portfolio/photo-video')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IoArrowBack /> Back to Photo & Video
        </BackButton>
        <Title>Photography Portfolio</Title>
        <Grid>
          {photos.map((photo, index) => (
            <ProjectCard
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={photo.image} alt={photo.title} />
              <ProjectOverlay>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PhotographyGallery;
