import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TestimonialSlider() {
  const testimonials = portfolioData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div
      className="testimonials-slider-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-card">
        <Quote size={48} className="quote-icon-large" />
        <blockquote className="testimonial-quote">
          "{current.quote}"
        </blockquote>

        <div className="testimonial-author-group">
          <img
            src={current.avatar}
            alt={current.author}
            className="testimonial-avatar"
            loading="lazy"
          />
          <div style={{ textAlign: 'left' }}>
            <h4 className="author-name">{current.author}</h4>
            <p className="author-role">
              {current.company} • <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{current.project}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="slider-controls">
        <button
          type="button"
          className="slider-btn"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="slider-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="slider-btn"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
