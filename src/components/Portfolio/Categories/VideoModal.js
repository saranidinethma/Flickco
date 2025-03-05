import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
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

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
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

const VideoModal = ({ isOpen, onClose, video }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  if (!video) return null;

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
            
            <VideoContainer>
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
              >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
            
            <Caption>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </Caption>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
