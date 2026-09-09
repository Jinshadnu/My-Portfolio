import React from 'react';
import { Download, CheckCircle2, Award, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personalInfo } = portfolioData;

  return (
    <section id="about" className="section section-alt">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <UserCheck size={14} />
            <span>Discover</span>
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            {about.subtitle}
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Developer Card Image */}
          <div className="about-photo-wrapper reveal-left">
            <div className="about-card-frame">
              <img
                src="/profile.png"
                alt={personalInfo.name}
                className="about-card-image"
                loading="lazy"
              />

              {/* Floating Experience Badge */}
              <div className="about-experience-badge">
                <span className="badge-number">5+</span>
                <span className="badge-text">
                  Years of Enterprise Engineering Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="about-text-content reveal-right">
            <h3 className="about-lead">
              Senior Mobile Application Developer specializing in enterprise Flutter solutions &amp; native Android systems.
            </h3>

            <div className="about-paragraphs">
              {about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Personal Info Grid */}
            <div className="about-info-grid">
              {about.infoCards.map((item, index) => (
                <div key={index} className="about-info-item">
                  <div className="about-info-label">{item.label}</div>
                  <div className="about-info-val">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Core Competencies Highlights */}
            <div className="about-highlights-grid">
              {about.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <CheckCircle2 size={18} className="highlight-icon" />
                  <div>
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-desc">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="#resume"
                className="btn btn-primary"
              >
                <Download size={18} />
                <span>View Full Resume &amp; Experience</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
