import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  ${props => props.position === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

const Caption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 30px;
  border-radius: 8px;
  
  h3 {
    margin: 0 0 5px;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const GalleryModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={onClose}>
              <IoClose />
            </CloseButton>
            
            <NavigationButton position="left" onClick={handlePrevious}>
              <IoArrowBack />
            </NavigationButton>
            
            <Image
              key={currentIndex}
              src={currentImage.image}
              alt={currentImage.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            
            <NavigationButton position="right" onClick={handleNext}>
              <IoArrowForward />
            </NavigationButton>
            
            <Caption>
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
            </Caption>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
