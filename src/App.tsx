import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import WhyMitwaiSection from './sections/WhyMitwaiSection'
import CasesSection from './sections/CasesSection'
import IndustriesStrip from './sections/IndustriesStrip'
import TeamSection from './sections/TeamSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-brand-navy font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyMitwaiSection />
        <CasesSection />
        <IndustriesStrip />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
