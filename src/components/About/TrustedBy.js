"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./TrustedBy.css"

const TrustedBy = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef(null)
  const lastScrollTime = useRef(Date.now())

  // You can replace these with your actual client logos
  const clients = [
    { name: "amberloom", logo: "/logo/amberloom main logo png.png" },
    { name: "Aron Argo", logo: "/logo/Aron Argo Logo png.png" },
    { name: "aron food", logo: "/logo/aron food main png.png" },
    { name: "ausi wipe", logo: "/logo/ausi wipe logo.png" },
    { name: "Burger galaxy", logo: "/logo/Burger galaxy TR.png" },
    { name: "celebricuts", logo: "/logo/celebricuts logo png.png" },
    { name: "darkwings", logo: "/logo/DARKWINGS P.png" },
    { name: "Deevove", logo: "/logo/DEEVOLVE c.png" },
    { name: "fair new", logo: "/logo/fair new.jpg" },
    { name: "images", logo: "/logo/images (1).png" },
    { name: "jelo", logo: "/logo/JELLO main png.png" },
    { name: "jj", logo: "/logo/JJ.png" },
    { name: "logo final", logo: "/logo/LOGO FINAL PNG.png" },
    { name: "logo fox", logo: "/logo/LOGO FOX trans.png" },
    { name: "logo1", logo: "/logo/Logo1.png" },
    { name: "zonder", logo: "/logo/Logo zonder tekst onder.png" },
    { name: "mcreation", logo: "/logo/MCREATION.png" },
    { name: "nimrasa", logo: "/logo/NIMRASA C PNG.png" },
    { name: "nuvusa", logo: "/logo/NUVUSA png black.png" },
    { name: "rama", logo: "/logo/RAMA.png" },
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)

      // Pause auto-animation when user manually scrolls
      lastScrollTime.current = Date.now()
      setIsPaused(true)

      // Resume after 5 seconds of inactivity
      clearTimeout(animationRef.current)
      animationRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 5000)
    }
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust scroll amount as needed
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Pause auto-animation when user manually scrolls
      lastScrollTime.current = Date.now()
      setIsPaused(true)

      // Resume after 5 seconds of inactivity
      clearTimeout(animationRef.current)
      animationRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 5000)
    }
  }

  // Auto-animation effect
  useEffect(() => {
    let animationTimer

    const autoAnimate = () => {
      if (!isPaused && scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current

        // If we're near the end, go back to the start
        if (scrollLeft >= scrollWidth - clientWidth - 100) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        } else {
          // Otherwise, scroll to the next set of logos
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + 200,
            behavior: "smooth",
          })
        }

        // Update arrow visibility
        handleScroll()
      }

      // Schedule the next animation
      animationTimer = setTimeout(autoAnimate, 3000)
    }

    // Start the animation
    animationTimer = setTimeout(autoAnimate, 3000)

    // Cleanup on unmount
    return () => {
      clearTimeout(animationTimer)
      clearTimeout(animationRef.current)
    }
  }, [isPaused])

  // Pause animation on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    // Only resume if it's been more than 5 seconds since last manual scroll
    if (Date.now() - lastScrollTime.current > 5000) {
      setIsPaused(false)
    }
  }

  return (
    <section className="trusted-by-section">
      <div className="trusted-by-container">
        <div className="trusted-by-heading">
          <h2>
            Trusted by over <span className="client-count">50+</span> customers
          </h2>
        </div>

        <div className="logos-container">
          {showLeftArrow && (
            <button className="scroll-arrow scroll-left" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            className="client-logos"
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {clients.map((client, index) => (
              <div key={index} className="logo-wrapper">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="client-logo animate-logo"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button className="scroll-arrow scroll-right" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy

