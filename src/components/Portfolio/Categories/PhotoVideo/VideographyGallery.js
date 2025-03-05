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
  aspect-ratio: 16/9;
  box-shadow: ${props => props.theme.shadows.medium};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

const VideographyGallery = () => {
  const navigate = useNavigate();
  
  const videos = [
    {
      id: 1,
      title: 'Corporate Videos',
      image: '/images/portfolio/photo-video/videography/corporate.jpg',
      description: 'Professional corporate video production'
    },
    {
      id: 2,
      title: 'Event Coverage',
      image: '/images/portfolio/photo-video/videography/event.jpg',
      description: 'Event videography services'
    },
    {
      id: 3,
      title: 'Commercial Production',
      image: '/images/portfolio/photo-video/videography/commercial.jpg',
      description: 'Commercial video production'
    },
    {
      id: 4,
      title: 'Aerial Videography',
      image: '/images/portfolio/photo-video/videography/aerial.jpg',
      description: 'Drone videography services'
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
        <Title>Videography Portfolio</Title>
        <Grid>
          {videos.map((video, index) => (
            <ProjectCard
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={video.image} alt={video.title} />
              <ProjectOverlay>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default VideographyGallery;
