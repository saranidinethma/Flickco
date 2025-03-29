"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Styled Components
const PortfolioSection = styled.section`
  padding: 100px 0;
  background: #f5f5f5;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
`

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
`

const CategoryBox = styled(motion(Link))`
  flex: 0 0 280px;
  height: 280px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.10);
  }
`

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 20px;
  transition: opacity 0.3s ease;
  
  h3 {
    margin: 0 0 5px 0;
    font-size: 1.5rem;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: #007bff;
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
`

// Sample data for categories - we'll export this to be used in the gallery page
export const categories = [
  {
    id: "posts",
    title: "Social Media Posts",
    image: "/images/portfolio/posts/post.png",
    description: "Creative social media post designs",
    items: [
      { id: 1,  image: "/images/portfolio/posts/pizza & pasta.png" },
      { id: 2,  image: "/images/portfolio/posts/prime.jpg" },
      { id: 3,  image: "/images/portfolio/posts/D MAJOR 2.2.jpg" },
      { id: 4, image: "/images/portfolio/posts/DONOR DAY.png" },
      { id: 5, image: "/images/portfolio/posts/starbeens.jpg" },
      { id: 6, image: "/images/portfolio/posts/united kingdom.jpg" },
      { id: 7, image: "/images/portfolio/posts/LGS post.jpg" },
      { id: 8, image: "/images/portfolio/posts/D-Major.jpg" },
      { id: 9, image: "/images/portfolio/posts/IMG_4740.JPG" },


    ],
  },
  {
    id: "reels",
    title: "Social Media Reels",
    image: "/images/portfolio/reels/reels.png",
    description: "Engaging social media reels",
    items: [
      { id: 1, title: "Product Reel", image: "/images/portfolio/social-media/reels/product.jpg" },
      { id: 2, title: "Brand Story", image: "/images/portfolio/social-media/reels/brand.jpg" },
      { id: 3, title: "Tutorial Reel", image: "/images/portfolio/social-media/reels/tutorial.jpg" },
    ],
  },
  {
    id: "websites",
    title: "Website Design",
    image: "/images/portfolio/website-cover.jpg",
    description: "Modern website designs",
    items: [
      { id: 1, title: "E-commerce Site", image: "/images/portfolio/websites/ecommerce.jpg" },
      { id: 2, title: "Portfolio Site", image: "/images/portfolio/websites/portfolio.jpg" },
      { id: 3, title: "Corporate Site", image: "/images/portfolio/websites/corporate.jpg" },
      { id: 4, title: "Landing Page", image: "/images/portfolio/websites/landing.jpg" },
    ],
  },
  {
    id: "animations-2d",
    title: "2D Animations",
    image: "/images/portfolio/animations/2d-cover.jpg",
    description: "Creative 2D animations",
    items: [
      { 
        id: 1, 
        title: "Logo Animation", 
        video: "/images/portfolio/2D Animation/Logo intro Travel fox.mp4",
       
      },
      { 
        id: 2, 
        title: "Character Animation", 
        video: "/images/portfolio/2D Animation/lv_0_20240404235633.mp4",
        // poster: "/images/portfolio/animations/2d/character-poster.jpg" 
      },
      { 
        id: 3, 
        title: "Explainer Video", 
        video: "/images/portfolio/2D Animation/semicolon LOGO INTRO.mp4",
        // poster: "/images/portfolio/animations/2d/explainer-poster.jpg" 
      },
      { 
        id: 4, 
        title: "Explainer Video", 
        video: "/images/portfolio/2D Animation/Cougar logo outro.mp4",
        // poster: "/images/portfolio/animations/2d/explainer-poster.jpg" 
      }
    ]
},
{
  id: "animations-3d",
  title: "3D Animations",
  image: "/images/portfolio/animations/2d-cover.jpg",
  description: "Creative 3D animations",
  items: [
    { 
      id: 1, 
      title: "Logo Animation", 
      video: "/images/portfolio/3D Animation/911 cca.mp4",
     
    },
    { 
      id: 2, 
      title: "Character Animation", 
      video: "/images/portfolio/3D Animation/lv_0_20240703191941.mp4",
      // poster: "/images/portfolio/animations/2d/character-poster.jpg" 
    },
    // { 
    //   id: 3, 
    //   title: "Explainer Video", 
    //   video: "/images/portfolio/2D Animation/semicolon LOGO INTRO.mp4",
    //   // poster: "/images/portfolio/animations/2d/explainer-poster.jpg" 
    // }
  ]
},
  {
    id: "photography",
    title: "Photography",
    image: "/images/portfolio/photography-cover.jpg",
    description: "Professional photography",
    items: [
      { id: 1, title: "Product Photography", image: "/images/portfolio/photography/product.jpg" },
      { id: 2, title: "Portrait Photography", image: "/images/portfolio/photography/portrait.jpg" },
      { id: 3, title: "Event Photography", image: "/images/portfolio/photography/event.jpg" },
      { id: 4, title: "Landscape Photography", image: "/images/portfolio/photography/landscape.jpg" },
    ],
  },
  {
    id: "videography",
    title: "Videography",
    image: "/images/portfolio/videography-cover.jpg",
    description: "Professional video production",
    items: [
      { id: 1, title: "Corporate Video", image: "/images/portfolio/videography/corporate.jpg" },
      { id: 2, title: "Event Coverage", image: "/images/portfolio/videography/event.jpg" },
      { id: 3, title: "Product Video", image: "/images/portfolio/videography/product.jpg" },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    image: "/images/portfolio/branding-cover.jpg",
    description: "Complete brand identity design",
    items: [
      { id: 1, title: "Logo Design", image: "/images/portfolio/branding/logo.jpg" },
      { id: 2, title: "Brand Guidelines", image: "/images/portfolio/branding/guidelines.jpg" },
      { id: 3, title: "Packaging Design", image: "/images/portfolio/branding/packaging.jpg" },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    image: "/images/portfolio/ui-ux-cover.jpg",
    description: "User interface and experience design",
    items: [
      { id: 1, title: "Mobile App UI", image: "/images/portfolio/ui-ux/mobile.jpg" },
      { id: 2, title: "Web App UI", image: "/images/portfolio/ui-ux/webapp.jpg" },
      { id: 3, title: "Dashboard Design", image: "/images/portfolio/ui-ux/dashboard.jpg" },
    ],
  },
  {
    id: "print",
    title: "Print Design",
    image: "/images/portfolio/print-cover.jpg",
    description: "Professional print materials",
    items: [
      { id: 1, title: "Business Cards", image: "/images/portfolio/print/business-cards.jpg" },
      { id: 2, title: "Brochures", image: "/images/portfolio/print/brochures.jpg" },
      { id: 3, title: "Posters", image: "/images/portfolio/print/posters.jpg" },
    ],
  },
]

const Portfolio = () => {
  const carouselRef = useRef(null)
  const [carouselPosition, setCarouselPosition] = useState(0)
  const itemsPerView = 4 // Number of items visible at once
  const maxPosition = Math.max(0, categories.length - itemsPerView)

  const handleNext = () => {
    if (carouselPosition < maxPosition) {
      setCarouselPosition(carouselPosition + 1)
    }
  }

  const handlePrev = () => {
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1)
    }
  }

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title>Our Portfolio</Title>

        <CarouselContainer>
          <NavigationButton className="prev" onClick={handlePrev} disabled={carouselPosition === 0}>
            <ChevronLeft size={24} />
          </NavigationButton>

          <CarouselTrack
            ref={carouselRef}
            animate={{ x: -carouselPosition * 300 }} // 300px is the width of each item + gap
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {categories.map((category) => (
              <CategoryBox
                key={category.id}
                to={`/portfolio/${category.id}`}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={category.image || "/placeholder.svg"} alt={category.title} />
                <CategoryOverlay>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </CategoryOverlay>
              </CategoryBox>
            ))}
          </CarouselTrack>

          <NavigationButton className="next" onClick={handleNext} disabled={carouselPosition >= maxPosition}>
            <ChevronRight size={24} />
          </NavigationButton>
        </CarouselContainer>
      </Container>
    </PortfolioSection>
  )
}

export default Portfolio

