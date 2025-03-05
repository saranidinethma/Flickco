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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;
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

const PostsGallery = () => {
  const navigate = useNavigate();
  
  const posts = [
    {
      id: 1,
     
      image: '/images/portfolio/social-media/posts/DONOR DAY.png',
      // description: 'Social media campaign for luxury brand'
    },
    {
      id: 2,
      // title: 'Product Launch',
      image: '/images/portfolio/social-media/posts/D MAJOR 2.2.jpg',
      // description: 'Product launch campaign on Instagram'
    },
    {
      id: 3,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/D-Major.jpg',
      // description: 'Fashion collection showcase'
    },
    {
      id: 4,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/IMG_4740.JPG',
      // description: 'Fashion collection showcase'
    },
    {
      id: 5,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/LGS post.jpg',
      // description: 'Fashion collection showcase'
    },
    {
      id: 6,
    
      image: '/images/portfolio/social-media/posts/pizza & pasta.png',
      
    },
    {
      id: 7,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/prime.jpg',
      // description: 'Fashion collection showcase'
    },
    {
      id: 8,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/starbeens.jpg',
      // description: 'Fashion collection showcase'
    },
    {
      id: 9,
      // title: 'Fashion Collection',
      image: '/images/portfolio/social-media/posts/united kingdom.jpg',
      // description: 'Fashion collection showcase'
    }

    // Add more posts as needed
  ];

  return (
    <Section>
      <Container>
        <BackButton
          onClick={() => navigate('/portfolio/social-media')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IoArrowBack /> Back to Social Media
        </BackButton>
        <Title>Social Media Posts</Title>
        <Grid>
          {posts.map((post, index) => (
            <ProjectCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={post.image} alt={post.title} />
              <ProjectOverlay>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PostsGallery;
