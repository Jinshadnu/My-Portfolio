import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

function CounterItem({ targetValue, suffix, label, description, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseFloat(targetValue);
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(end % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
}

export default function Stats() {
  const { stats } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="section" ref={containerRef} style={{ paddingBottom: '3.5rem' }}>
      <div className="container reveal">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
