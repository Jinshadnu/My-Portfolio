import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form submission / connection to Hostinger PHP backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger festive confetti celebration
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Fallback gracefully if confetti unavailable
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <div className="contact-form-card">
      {submitted && (
        <div className="form-success-banner">
          <CheckCircle2 size={22} color="#16a34a" />
          <div>
            <strong>Message Received!</strong>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#166534' }}>
              Thank you for reaching out. Jinshad will respond to your email shortly!
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`form-input ${errors.name ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="form-error-msg">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="form-error-msg">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Flutter Mobile App Development Inquiry"
            className={`form-input ${errors.subject ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.subject && <p className="form-error-msg">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project scope, timeline, and requirements..."
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="form-error-msg">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
