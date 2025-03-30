"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { ArrowLeft, Eye, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { categories } from "./Portfolio"

// Styled Components
const GalleryPageContainer = styled.div`
  padding: 120px 0;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  min-height: 100vh;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, #3498db, #8e44ad);
  }
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 12px 20px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`

const GalleryHeader = styled.div`
  margin-bottom: 60px;
`

const CategoryLabel = styled.p`
  font-size: 1.2rem;
  color: #3498db;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
  font-weight: 600;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  max-width: 800px;
  line-height: 1.7;
  margin-bottom: 20px;
`

const Stats = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`

const StatItem = styled.div`
  background: white;
  padding: 15px 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h4 {
    font-size: 2rem;
    margin: 0 0 5px 0;
    color: #3498db;
  }
  
  p {
    margin: 0;
    color: #7f8c8d;
    font-size: 0.9rem;
  }
`

const FilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 10px 20px;
  background: ${props => props.active ? '#3498db' : 'white'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: ${props => props.active ? '#3498db' : '#f1f1f1'};
    transform: translateY(-2px);
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
`

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: ${props => props.aspectRatio || '1'};
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1);
  }
  
  &:hover {
    &::after {
      opacity: 1;
    }
    
    img, video {
      transform: scale(1.12);
    }
    
    .gallery-overlay {
      opacity: 1;
      transform: translateY(0);
    }
    
    .action-buttons {
      opacity: 1;
    }
  }
`

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 25px;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  
  h4 {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.9);
  }
`

const ActionButtons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const ActionButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #3498db;
    color: white;
    transform: scale(1.1);
  }
`

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

const LightboxContent = styled(motion.div)`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  
  img, video {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
    object-fit: contain;
  }
`

const LightboxClose = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e74c3c;
    color: white;
  }
`

const NotFound = styled.div`
  text-align: center;
  padding: 80px 0;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 40px;
  }
`

const GalleryPage = () => {
  const { categoryId } = useParams()
  const category = categories.find((cat) => cat.id === categoryId)
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  
  // Add some filters based on item type if available
  const getFilters = () => {
    if (!category || !category.items) return [];
    
    const filters = new Set();
    category.items.forEach(item => {
      if (item.type) filters.add(item.type);
    });
    
    return Array.from(filters);
  }
  
  const filters = getFilters();
  
  const filteredItems = !category ? [] : 
    activeFilter === 'all' ? 
    category.items : 
    category.items.filter(item => item.type === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])
  
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [lightbox])

  if (!category) {
    return (
      <GalleryPageContainer>
        <Container>
          <BackButton to="/portfolio">
            <ArrowLeft size={20} />
            Back to Portfolio
          </BackButton>
          <NotFound>
            <h2>Category Not Found</h2>
            <p>The category you're looking for doesn't exist or has been moved.</p>
            <BackButton to="/portfolio">
              <ArrowLeft size={20} />
              Return to Portfolio
            </BackButton>
          </NotFound>
        </Container>
      </GalleryPageContainer>
    )
  }

  return (
    <>
      <GalleryPageContainer>
        <Container>
          <BackButton to="/portfolio">
            <ArrowLeft size={20} />
            Back to Portfolio
          </BackButton>

          <GalleryHeader>
            <CategoryLabel>Portfolio</CategoryLabel>
            <Title>{category.title}</Title>
            <Description>{category.description}</Description>
            
            <Stats>
              <StatItem>
                <h4>{category.items.length}</h4>
                <p>Projects</p>
              </StatItem>
              {category.completedDate && (
                <StatItem>
                  <h4>{category.completedDate}</h4>
                  <p>Completed</p>
                </StatItem>
              )}
            </Stats>
          </GalleryHeader>

          {filters.length > 0 && (
            <FilterBar>
              <FilterButton 
                active={activeFilter === 'all'} 
                onClick={() => setActiveFilter('all')}
              >
                All
              </FilterButton>
              {filters.map(filter => (
                <FilterButton 
                  key={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </FilterButton>
              ))}
            </FilterBar>
          )}

          <GalleryGrid>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <GalleryItem 
                  key={item.id}
                  layoutId={`item-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  aspectRatio={item.aspectRatio}
                  onClick={() => setLightbox(item)}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      poster={item.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.image || "/placeholder.svg"} 
                      alt={item.title || `Project ${item.id}`} 
                    />
                  )}
                  <GalleryOverlay className="gallery-overlay">
                    <h4>{item.title || `Project ${item.id}`}</h4>
                    {item.description && <p>{item.description}</p>}
                  </GalleryOverlay>
                  <ActionButtons className="action-buttons">
                    <ActionButton onClick={(e) => { 
                      e.stopPropagation();
                      setLightbox(item);
                    }}>
                      <Eye size={20} />
                    </ActionButton>
                    {item.link && (
                      <ActionButton as="a" href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </ActionButton>
                    )}
                  </ActionButtons>
                </GalleryItem>
              ))}
            </AnimatePresence>
          </GalleryGrid>
        </Container>
      </GalleryPageContainer>
      
      <AnimatePresence>
        {lightbox && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <LightboxContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <LightboxClose onClick={() => setLightbox(null)}>
                ✕
              </LightboxClose>
              {lightbox.video ? (
                <video
                  src={lightbox.video}
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={lightbox.image} 
                  alt={lightbox.title || `Project ${lightbox.id}`} 
                />
              )}
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryPage