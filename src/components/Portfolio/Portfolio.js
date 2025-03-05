import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.lightGray2};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
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

const SubcategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const SubcategoryTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const Portfolio = () => {
  const categories = [
    {
      id: 'social-media',
      title: 'Social Media',
      image: '/images/portfolio/social-media/posts/starbeens.jpg',
      description: 'Creative content for social platforms',
      path: '/portfolio/social-media',
      subcategories: ['Social Media Posts', 'Social Media Reels']
    },
    {
      id: 'animations',
      title: 'Animations',
      image: '/images/portfolio/animations-cover.jpg',
      description: 'Engaging 2D and 3D animations',
      path: '/portfolio/animations',
      subcategories: ['Animations', '3D Animations']
    },
    {
      id: 'photo-video',
      title: 'Photography & Video',
      image: '/images/portfolio/photo-video-cover.jpg',
      description: 'Professional photo and video production',
      path: '/portfolio/photo-video',
      subcategories: ['Photography', 'Videography']
    }
  ];

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title>Our Portfolio</Title>
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
                <SubcategoryList>
                  {category.subcategories.map((sub, i) => (
                    <SubcategoryTag key={i}>{sub}</SubcategoryTag>
                  ))}
                </SubcategoryList>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
