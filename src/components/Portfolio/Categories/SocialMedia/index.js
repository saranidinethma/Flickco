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
  aspect-ratio: 4/3;
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

const SocialMediaGallery = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 'posts',
      title: 'Social Media Posts',
      image: '/images/portfolio/social-media/posts/starbeens.jpg',
      description: 'Creative and engaging social media posts',
      path: '/portfolio/social-media/posts'
    },
    {
      id: 'reels',
      title: 'Social Media Reels',
      image: '/images/portfolio/social-media/reels-cover.jpg',
      description: 'Dynamic and trending social media reels',
      path: '/portfolio/social-media/reels'
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
        <Title>Social Media Projects</Title>
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              to={project.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <ProjectOverlay>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default SocialMediaGallery;
