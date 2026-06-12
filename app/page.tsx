import HybrixExperience from '@/components/HybrixExperience'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import Solutions from '@/components/sections/Solutions'
import Industries from '@/components/sections/Industries'
import HowItWorks from '@/components/sections/HowItWorks'
import LiveDemo from '@/components/sections/LiveDemo'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import CaseStudies from '@/components/sections/CaseStudies'
import Pricing from '@/components/sections/Pricing'
import DemoSection from '@/components/sections/DemoSection'
import { Trust, About, FAQ, Footer, WhatsAppFloat } from '@/components/sections/MiscSections'

export default function Home() {
  return (
    <HybrixExperience>
      <main>
        <Navbar />
        <Hero />
        <PainPoints />
        <Solutions />
        <Industries />
        <HowItWorks />
        <LiveDemo />
        <Benefits />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <Trust />
        <About />
        <DemoSection />
        <FAQ />
        <Footer />
        <WhatsAppFloat />
      </main>
    </HybrixExperience>
  )
}
