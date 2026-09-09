import React from 'react';
import { ExternalLink, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projects & Case Studies' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
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
    <footer className="footer">
      <div className="container reveal">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <h4>{personalInfo.name}</h4>
            <p>
              Senior Flutter Developer &amp; Mobile Architect crafting high-performance, crash-free applications for enterprise and modern businesses.
            </p>
            <div className="footer-socials">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="Fiverr Freelance"
                aria-label="Fiverr Profile"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="footer-social-btn"
                title="Email"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="footer-title">Portfolio &amp; Work</h5>
            <ul className="footer-links">
              {quickLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Engineered with React &amp; Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
