"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Enhanced Styled Components
const PortfolioSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3498db, #8e44ad);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(52, 152, 219, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg,rgb(89, 90, 91),rgb(218, 98, 50));
    margin: 15px auto 0;
    border-radius: 2px;
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: #7f8c8d;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  padding: 40px 0;
`

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 25px;
  padding: 20px 10px;
`

const CategoryBox = styled(motion(Link))`
  flex: 0 0 280px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  }
  
  &:hover {
    &::before {
      opacity: 0.4;
    }
    
    img {
      transform: scale(1.12);
    }
  }
`

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 30px;
  transition: transform 0.4s ease;
  
  h3 {
    margin: 0 0 8px 0;
    font-size: 1.8rem;
    color: #fff;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transform: translateY(0);
    transition: transform 0.5s ease;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(0);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.8;
  }
  
  ${CategoryBox}:hover & {
    h3 {
      transform: translateY(-5px);
    }
    
    p {
      transform: translateY(-5px);
      opacity: 1;
    }
  }
`

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  color:rgb(219, 102, 52);
  
  &:hover {
    background:rgb(177, 93, 38);
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }
  
  &.prev {
    left: -20px;
  }
  
  &.next {
    right: -20px;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`

const CategoryCount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 8px;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#3498db' : '#e0e0e0'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? '#3498db' : '#bdc3c7'};
  }
`

// Sample data for categories - this is the same as your original
const categories = [
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
    image: "/images/portfolio/Web/1.png",
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
    image: "/images/portfolio/2D Animation/2.png",
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
  image: "/images/portfolio/3D Animation/3.png",
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
    image: "/images/portfolio/Photography/PHOTOGRAHPY.png",
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
    image: "/images/portfolio/Videography/VIDEOGRAPHY.png",
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
    image: "/images/portfolio/Branding/4.png",
    description: "Complete brand identity design",
    items: [
      { id: 1, title: "Logo Design", image: "/images/portfolio/branding/logo.jpg" },
      { id: 2, title: "Brand Guidelines", image: "/images/portfolio/branding/guidelines.jpg" },
      { id: 3, title: "Packaging Design", image: "/images/portfolio/branding/packaging.jpg" },
    ],
  }
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
  
  const goToPosition = (position) => {
    setCarouselPosition(Math.min(position, maxPosition))
  }

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <Title>Our Portfolio</Title>
        <Subtitle>Explore our diverse collection of creative works across various categories, showcasing our expertise and passion for design excellence.</Subtitle>

        <CarouselContainer>
          <NavigationButton className="prev" onClick={handlePrev} disabled={carouselPosition === 0}>
            <ChevronLeft size={28} />
          </NavigationButton>

          <CarouselTrack
            ref={carouselRef}
            animate={{ x: -carouselPosition * 305 }} // 280px width + 25px gap
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.map((category) => (
              <CategoryBox
                key={category.id}
                to={`/portfolio/${category.id}`}
                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
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
            <ChevronRight size={28} />
          </NavigationButton>
        </CarouselContainer>
        
        <CategoryCount>
          {Array.from({ length: Math.ceil(categories.length / itemsPerView) }).map((_, index) => (
            <Dot 
              key={index} 
              active={index === Math.floor(carouselPosition / itemsPerView)}
              onClick={() => goToPosition(index * itemsPerView)}
            />
          ))}
        </CategoryCount>
      </Container>
    </PortfolioSection>
  )
}

// Export both the component and the categories data
export { categories }
export default Portfolio