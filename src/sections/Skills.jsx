import React, { useState, useEffect, useRef } from 'react';
import { Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { progressSkills, categories, allBadges } = portfolioData.skills;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const half = Math.ceil(progressSkills.length / 2);
  const leftSkills = progressSkills.slice(0, half);
  const rightSkills = progressSkills.slice(half);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={14} />
            <span>Capabilities</span>
          </span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my mobile engineering proficiency, architectural paradigms, and toolchain.
          </p>
        </div>

        {/* Two-column animated skill bars */}
        <div className="skills-container">
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <div key={index} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span>{skill.name}</span>
                  <span className="skill-level-number">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <div key={index} className="skill-bar-wrapper">
                <div className="skill-bar-header">
                  <span>{skill.name}</span>
                  <span className="skill-level-number">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Tech Groupings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '1.5rem'
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-navy)', marginBottom: '0.85rem' }}>
                {cat.name}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-main)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Badges Cloud */}
        <div className="tech-badges-section">
          <h3 className="tech-badges-title">Frequently Used Frameworks &amp; Technologies</h3>
          <div className="badges-cloud">
            {allBadges.map((badge, idx) => (
              <span key={idx} className="tech-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
