import React from 'react';
import {
  Code2,
  WifiOff,
  ShieldCheck,
  MessageSquare,
  Rocket,
  Sparkles,
  CheckSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  WifiOff: WifiOff,
  ShieldCheck: ShieldCheck,
  MessageSquare: MessageSquare,
  Rocket: Rocket,
  Sparkles: Sparkles,
};

export default function WhyMe() {
  const { whyWorkWithMe } = portfolioData;

  return (
    <section className="section section-alt">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <CheckSquare size={14} />
            <span>Value Proposition</span>
          </span>
          <h2 className="section-title">Why Work With Me</h2>
          <p className="section-subtitle">
            What sets my engineering approach apart when building mission-critical software for your enterprise or startup.
          </p>
        </div>

        <div className="whyme-grid">
          {whyWorkWithMe.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={idx} className="whyme-card">
                <div className="whyme-icon-wrap">
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="whyme-title">{item.title}</h3>
                  <p className="whyme-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
