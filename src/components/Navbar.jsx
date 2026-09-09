import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // ScrollSpy logic
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className="nav-logo-badge">J</div>
            <span>{portfolioData.personalInfo.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-cta">
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span>Let's Talk</span>
              <Send size={15} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <div style={{ marginTop: '0.5rem' }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span>Let's Talk</span>
            <Send size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
