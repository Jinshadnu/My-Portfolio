import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="section section-alt">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an enterprise mobile app, native Android project, or responsive web application to build? Let's discuss your technical goals.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-card reveal-left">
            <div className="contact-info-header">
              <h3>Direct Contacts</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Feel free to reach out directly via email, phone, or instant messaging. I usually respond within a few hours.
              </p>
            </div>

            <div className="contact-methods">
              <a href={personalInfo.socialLinks.email} className="contact-method-item">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Email Address</div>
                  <div className="contact-method-value">{personalInfo.email}</div>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-method-item">
                <div className="contact-method-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Phone &amp; WhatsApp</div>
                  <div className="contact-method-value">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <div className="contact-method-value">{personalInfo.location}</div>
                </div>
              </div>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <div className="contact-method-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="contact-method-label">LinkedIn Profile</div>
                  <div className="contact-method-value">linkedin.com/in/jinshadnu</div>
                </div>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <div className="contact-method-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="contact-method-label">GitHub Repositories</div>
                  <div className="contact-method-value">github.com/Jinshadnu</div>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Quick Chat CTA */}
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} color="#16a34a" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="reveal-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
