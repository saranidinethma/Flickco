"use client"

import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styled components remain the same
const ServicesSection = styled.section`
  padding: 100px 50px;
  background: ${(props) => props.theme.colors.lightGray2};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 60px 20px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.dark};
`

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
`

// Modified ServiceCard to accept highlighted prop
const ServiceCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.highlighted &&
    `
    box-shadow: 0 0 0 3px #ff7e00, 0 6px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background-color: #ff7e00;
    }
  `}
`

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover img {
    transform: scale(1.1);
  }
`

const ServiceContent = styled.div`
  padding: 30px;
`

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.dark};
`

const ServiceDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.6;
`

// Map of service IDs to their titles
const serviceIdMap = {
  commercial: "Cinematography",
  "ui-ux": "UI/UX Design",
  "music-video": "Music Video Production",
  videography: "VideoGraphy Photography",
  "digital-marketing": "Digital Marketing",
  animation: "3D And Animation",
}

// Service data with IDs added
const services = [
  {
    id: "commercial",
    title: "Cinematography",
    description:
      "Crafting high-quality visual storytelling with professional filming techniques and advanced camera work.",
    image: "/images/1675720763645 (1).jpg",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Designing intuitive and engaging digital experiences that enhance user satisfaction and usability.",
    image: "/images/ui-ux-design.jpg",
  },
  {
    id: "music-video",
    title: "Music Video Production",
    description: "Creating visually stunning music videos with professional direction, filming, and editing.",
    image: "/images/music-Video-production.jpg",
  },
  {
    id: "videography",
    title: "VideoGraphy Photography",
    description: "Capturing high-quality videos and photos to enhance brand presence and digital engagement.",
    image: "/images/vediography-photography.jpg",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing strategies to boost your online presence and reach your target audience.",
    image: "/images/digital-marketing.jpg",
  },
  {
    id: "animation",
    title: "3D And Animation",
    description: "Producing immersive 3D visuals and animations for enhanced storytelling and brand engagement.",
    image: "/images/3d-animation.jpg",
  },
]

const Services = () => {
  const location = useLocation()
  const servicesRef = useRef({})
  const sectionRef = useRef(null)

  // Extract the hash from the URL
  const hash = location.hash.replace("#", "")

  // Effect to handle scrolling and highlighting when hash changes
  useEffect(() => {
    if (hash && servicesRef.current[hash]) {
      // Scroll to the service with a slight delay to ensure rendering is complete
      setTimeout(() => {
        servicesRef.current[hash].scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 300)
    } else if (hash === "services" && sectionRef.current) {
      // If just #services, scroll to the section
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 300)
    }
  }, [hash, location])

  return (
    <ServicesSection id="services" ref={sectionRef}>
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
        </SectionSubtitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.id}
              ref={(el) => (servicesRef.current[service.id] = el)}
              highlighted={hash === service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceImage>
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  )
}

export default Services

