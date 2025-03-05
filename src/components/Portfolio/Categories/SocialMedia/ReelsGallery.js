import React, { useState, useRef } from 'react';
import { IoPlayCircle } from 'react-icons/io5';
import VideoModal from '../VideoModal';
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
  aspect-ratio: 9/16;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  &:hover {
    .video-thumbnail {
      transform: scale(1.05);
    }
    .play-icon {
      opacity: 1;
    }
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

const ReelsGallery = () => {
  const navigate = useNavigate();
  const [selectedReel, setSelectedReel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const reels = [
    {
      id: 1,
      // title: 'Product Showcase',
      video: '/images/portfolio/social-media/reels/lv_0_20240404235633.mp4',
      thumbnail: '/images/portfolio/social-media/reels/Screenshot 2025-03-04 at 10.44.59.jpg',
    //   description: 'Dynamic product showcase reel'
    // 
    },
    {
      id: 2,
      // title: 'Brand Story',
      video: '/images/portfolio/social-media/reels/Logo intro Travel fox.mp4',
      thumbnail: '/images/portfolio/social-media/reels/Screenshot 2025-03-04 at 10.47.40.jpg',
      // description: 'Engaging brand story reel'
    },
    {
      id: 3,
      // title: 'Behind the Scenes',
      video: '/images/portfolio/social-media/reels/semicolon LOGO INTRO.mp4',
      thumbnail: '/images/portfolio/social-media/reels/Screenshot 2025-03-04 at 10.48.56.jpg',
      // description: 'Behind the scenes content'
    }
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
        <Title>Social Media Reels</Title>
        <Grid>
          {reels.map((reel, index) => (
            <ProjectCard
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setSelectedReel(reel);
                setIsModalOpen(true);
              }}
            >
              <video
                className="video-thumbnail"
                poster={reel.thumbnail}
                muted
                playsInline
              >
                <source src={reel.video} type="video/mp4" />
              </video>
              <IoPlayCircle className="play-icon" />
              <ProjectOverlay>
                <h3>{reel.title}</h3>
                <p>{reel.description}</p>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedReel(null);
        }}
        video={selectedReel}
      />
    </Section>
  );
};

export default ReelsGallery;
