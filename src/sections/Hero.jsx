import React from 'react';
import { ArrowRight, Download, Send, Mail, ExternalLink, Code2, Smartphone, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import Typewriter from '../components/Typewriter';
import { portfolioData } from '../data/portfolioData';
import heroProfileImg from '../assets/hero-profile.jpg';

export default function Hero() {
  const { personalInfo } = portfolioData;

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
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column Content */}
          <div className="hero-content">
            {/* Status Badge */}
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>{personalInfo.availability}</span>
            </div>

            <p className="hero-title-prefix">Hi, I'm</p>
            <h1 className="hero-title">
              <span className="hero-title-name">{personalInfo.name}</span>
            </h1>

            <p className="hero-role">
              <Typewriter
                words={[
                  'Senior Flutter Developer',
                  'Mobile Application Architect',
                  'Native Android Specialist',
                  'Full-Stack Web Developer',
                  'Offline-First Systems Engineer'
                ]}
              />
            </p>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="#portfolio"
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, 'portfolio')}
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#resume"
                className="btn btn-outline"
                onClick={(e) => scrollToSection(e, 'resume')}
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="btn btn-dark"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <Send size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="hero-social-label">Follow / Connect:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.email}
                className="social-icon-btn"
                title="Email"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={personalInfo.socialLinks.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="Fiverr Freelance"
                aria-label="Fiverr Profile"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Right Column Visual */}
          <div className="hero-visual-wrapper">
            {/* Expertise Badge */}
            <div className="floating-badge badge-top-left">
              <div className="floating-badge-icon">
                <Smartphone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>Expertise in</div>
                <div style={{ fontWeight: 800 }}>Flutter &amp; Android</div>
              </div>
            </div>

            {/* Hero Portrait Visual */}
            <div className="hero-portrait-frame">
              <div className="hero-portrait-glow"></div>
              <img
                src={heroProfileImg}
                alt={personalInfo.name}
                className="hero-portrait-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
