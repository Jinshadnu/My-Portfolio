import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import TechMarquee from './components/TechMarquee';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Stats from './sections/Stats';
import WhyMe from './sections/WhyMe';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="portfolio-app">
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        {/* Infinite Right-to-Left Tech Marquee */}
        <TechMarquee />
        <About />
        <Skills />
        <Resume />
        <Services />
        <Portfolio />
        <Stats />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  );
}
