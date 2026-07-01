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
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <HybrixExperience>
      <main>
        
        <Navbar />
        <div id="hero" className="scroll-mt-24"><Hero /></div>
        <div id="pain-points" className="scroll-mt-24"><PainPoints /></div>
        <div id="solutions" className="scroll-mt-24"><Solutions /></div>
        <div id="industries" className="scroll-mt-24"><Industries /></div>
        <div id="how-it-works" className="scroll-mt-24"><HowItWorks /></div>
        <div id="live-demo" className="scroll-mt-24"><LiveDemo /></div>
        <div id="benefits" className="scroll-mt-24"><Benefits /></div>
        <div id="testimonials" className="scroll-mt-24"><Testimonials /></div>
        <div id="case-studies" className="scroll-mt-24"><CaseStudies /></div>
        <div id="pricing" className="scroll-mt-24"><Pricing /></div>
        <div id="trust" className="scroll-mt-24"><Trust /></div>
        <div id="about" className="scroll-mt-24"><About /></div>
        <div id="demo-section" className="scroll-mt-24"><DemoSection /></div>
        <div id="faq" className="scroll-mt-24"><FAQ /></div>
        <div id="footer" className="scroll-mt-24"><Footer /></div>
        <ChatBot />
        <WhatsAppFloat />
      </main>
    </HybrixExperience>
  )
}
