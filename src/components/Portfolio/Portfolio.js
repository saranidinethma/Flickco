import React, { useState } from 'react';
import './Portfolio.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 100px 0;
  background: #f5f5f5;
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
  color: #333;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const categories = [
  {
    id: 'website',
    title: 'Website',
    image: '/images/portfolio/website-cover.jpg',
    description: 'Creative website projects',
    subcategories: []
  },
  {
    id: 'social-media',
    title: 'Social Media',
    image: '/images/portfolio/social-media/posts/starbeens.jpg',
    description: 'Social media content',
    subcategories: ['Social Media Posts', 'Social Media Reels']
  },
  {
    id: 'animations',
    title: 'Animations',
    image: '/images/portfolio/animations-cover.jpg',
    description: '2D and 3D animations',
    subcategories: ['2D Animations', '3D Animations']
  },
  {
    id: 'photography',
    title: 'Photography',
    image: '/images/portfolio/photography-cover.jpg',
    description: 'Photo and video productions',
    subcategories: ['Photography', 'Videography']
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title>Our Portfolio</Title>
        <Grid>
          {categories.map((category) => (
            <ProjectCard
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} alt={category.title} />
              <div className="portfolio-overlay">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </ProjectCard>
          ))}
        </Grid>
        {activeCategory && (
          <Gallery>
            {activeCategory.subcategories.map((sub, index) => (
              <div key={index} className="portfolio-item">
                <img
                  src={`/images/portfolio/${activeCategory.id}/${sub.toLowerCase().replace(/ /g, '-')}.jpg`}
                  alt={sub}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <h4>{sub}</h4>
                </div>
              </div>
            ))}
          </Gallery>
        )}
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
