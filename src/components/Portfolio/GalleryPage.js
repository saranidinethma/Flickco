"use client"

import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { ArrowLeft } from "lucide-react"
import { categories } from "./Portfolio"

// Styled Components
const GalleryPageContainer = styled.div`
  padding: 100px 0;
  background: #f5f5f5;
  min-height: 100vh;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #007bff;
  }
`

const GalleryHeader = styled.div`
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
`

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
`

const GalleryItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover video {
    transform: scale(1.1);
  }
  
  &:hover .gallery-overlay {
    opacity: 1;
  }
`

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  h4 {
    margin: 0;
    font-size: 1.2rem;
  }
`

const NotFound = styled.div`
  text-align: center;
  padding: 50px 0;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 30px;
  }
`

const GalleryPage = () => {
  const { categoryId } = useParams()
  const category = categories.find((cat) => cat.id === categoryId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

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
            <p>The category you're looking for doesn't exist.</p>
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
    <GalleryPageContainer>
      <Container>
        <BackButton to="/portfolio">
          <ArrowLeft size={20} />
          Back to Portfolio
        </BackButton>

        <GalleryHeader>
          <Title>{category.title}</Title>
          <Description>{category.description}</Description>
        </GalleryHeader>

        <GalleryGrid>
          {category.items.map((item) => (
            <GalleryItem key={item.id}>
              <video
                src={item.video}
                poster={item.poster}
                muted
                loop
                autoPlay
                playsInline
              />
              <GalleryOverlay className="gallery-overlay">
                <h4>{item.title}</h4>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GalleryPageContainer>
  )
}

export default GalleryPage