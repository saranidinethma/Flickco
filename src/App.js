import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/theme"

// Core Components
import Navbar from "./components/Navigation/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About" // About for any other use
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer" // Import the Footer component

// Experts (Team) Page
import Experts from "./components/Experts/Experts" // The Experts page, shown when About Us is clicked

// Portfolio Components
import Portfolio from "./components/Portfolio/Portfolio"
import GalleryPage from "./components/Portfolio/GalleryPage" // Import the new GalleryPage component

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About /> {/* Display About.js after Services */}
    <Contact />
  </>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar /> {/* Navbar with links */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:categoryId" element={<GalleryPage />} /> {/* New route for gallery pages */}
            <Route path="/about" element={<Experts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer will appear on all pages */}
      </Router>
    </ThemeProvider>
  )
}

export default App

