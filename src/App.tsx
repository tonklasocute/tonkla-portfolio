import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import TechStackSection from './components/TechStackSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'

function App() {
  return (
    <main className="relative bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <AmbientBackground />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default App
