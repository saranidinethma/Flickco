import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
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

const ProjectCard = styled(motion(Link))`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 16/9;
  text-decoration: none;
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
  padding: 30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;

  h3 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const PhotoVideoGallery = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'photography',
      title: 'Photography',
      image: '/images/portfolio/photo-video/photography-cover.jpg',
      description: 'Professional photography services',
      path: '/portfolio/photo-video/photography'
    },
    {
      id: 'videography',
      title: 'Videography',
      image: '/images/portfolio/photo-video/videography-cover.jpg',
      description: 'Professional video production',
      path: '/portfolio/photo-video/videography'
    }
  ];

  return (
    <Section>
      <Container>
        <BackButton
          onClick={() => navigate('/portfolio')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IoArrowBack /> Back to Portfolio
        </BackButton>
        <Title>Photo & Video Projects</Title>
        <Grid>
          {categories.map((category, index) => (
            <ProjectCard
              key={category.id}
              to={category.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={category.image} alt={category.title} />
              <ProjectOverlay>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PhotoVideoGallery;
