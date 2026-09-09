import React from 'react';
import { Briefcase, GraduationCap, Download, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const { experience, education, personalInfo } = portfolioData;

  return (
    <section id="resume" className="section section-alt">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>Career Path</span>
          </span>
          <h2 className="section-title">Resume &amp; Experience</h2>
          <p className="section-subtitle">
            A chronological timeline of my enterprise software development journey, corporate achievements, and educational foundation.
          </p>
        </div>

        <div className="resume-grid">
          {/* Left Column: Work Experience */}
          <div className="reveal-left">
            <h3 className="resume-column-title">
              <Briefcase size={22} color="#0284c7" />
              <span>Professional Experience</span>
            </h3>

            <div className="timeline">
              {experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4 className="timeline-role">{exp.role}</h4>
                    <div className="timeline-company">{exp.company}</div>

                    <div className="timeline-badge">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>

                    <p className="timeline-desc">{exp.description}</p>

                    <ul className="timeline-bullets">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>

                    <div className="timeline-tags">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="timeline-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Training */}
          <div className="reveal-right">
            <h3 className="resume-column-title">
              <GraduationCap size={24} color="#0284c7" />
              <span>Education &amp; Training</span>
            </h3>

            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <div className="timeline-company">{edu.institution}</div>

                    <div className="timeline-badge">
                      <Calendar size={13} />
                      <span>{edu.duration}</span>
                    </div>

                    <p className="timeline-desc" style={{ marginBottom: 0 }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}

              {/* Certifications & Specialized Knowledge */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content" style={{ background: '#f8fafc' }}>
                  <h4 className="timeline-role">Specialized Architectural Focus</h4>
                  <div className="timeline-company">Enterprise Standards</div>
                  <ul className="timeline-bullets" style={{ marginTop: '0.75rem' }}>
                    <li>Clean Architecture &amp; SOLID Design Principles</li>
                    <li>Offline-First Distributed Sync with SQLite &amp; Conflict Resolution</li>
                    <li>Google Play Store Keystore Signing, Proguard, &amp; CI/CD</li>
                    <li>AI-Assisted Accelerated Engineering (Cursor, Windsurf, Antigravity)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resume Download Box */}
            <div
              style={{
                marginTop: '2.5rem',
                padding: '2rem',
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-navy)', marginBottom: '0.5rem' }}>
                Need a printable version?
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Download my complete CV with detailed project breakdowns, technical milestones, and contact references.
              </p>
              <a
                href={personalInfo.socialLinks.email}
                className="btn btn-primary"
              >
                <Download size={18} />
                <span>Request Official PDF Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
