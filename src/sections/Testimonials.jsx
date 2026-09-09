import React from 'react';
import { MessageCircle } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <MessageCircle size={14} />
            <span>Endorsements</span>
          </span>
          <h2 className="section-title">Client &amp; Colleague Feedback</h2>
          <p className="section-subtitle">
            Insights and recommendations from managers, founders, and engineering leads who have worked with me.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
}
