import React from 'react';
import {
  Smartphone,
  Layers,
  Globe,
  Monitor,
  Cpu,
  Database,
  Palette,
  Wrench,
  Check,
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Smartphone: Smartphone,
  Layers: Layers,
  Globe: Globe,
  Monitor: Monitor,
  Cpu: Cpu,
  Database: Database,
  Palette: Palette,
  Wrench: Wrench,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="section">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>Offerings</span>
          </span>
          <h2 className="section-title">Professional Services</h2>
          <p className="section-subtitle">
            End-to-end software development services tailored for modern enterprises, high-growth startups, and visionary founders.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Smartphone;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-box">
                  <IconComponent size={26} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="service-feature-item">
                      <Check size={15} color="#0284c7" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
