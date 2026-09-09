import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Lightbulb, Trophy, Layers, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="project-category-badge" style={{ position: 'static' }}>
              {project.categoryLabel || project.category}
            </span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Banner */}
          <img
            src={project.image}
            alt={project.title}
            className="modal-banner-image"
          />

          {/* Overview */}
          <div>
            <h3 className="modal-section-title">
              <Layers size={18} color="#0284c7" />
              <span>Project Overview</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="modal-grid-two">
            <div className="modal-box" style={{ background: '#fff1f2', borderColor: '#fecdd3' }}>
              <h4 className="modal-box-title" style={{ color: '#e11d48', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <AlertCircle size={17} />
                <span>The Challenge / Problem</span>
              </h4>
              <p className="modal-box-text" style={{ color: '#4c0519' }}>
                {project.problem}
              </p>
            </div>

            <div className="modal-box" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
              <h4 className="modal-box-title" style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Lightbulb size={17} />
                <span>Engineered Solution</span>
              </h4>
              <p className="modal-box-text" style={{ color: '#14532d' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} color="#0284c7" />
                <span>Key Features & Capabilities</span>
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx} style={{ listStyleType: 'none', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#0284c7" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="modal-section-title">
              <span>Technologies & Architecture</span>
            </h3>
            <div className="project-tech-tags" style={{ marginBottom: 0 }}>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="tech-badge"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities & Impact */}
          {project.responsibilities && (
            <div>
              <h3 className="modal-section-title">
                <span>Core Responsibilities</span>
              </h3>
              <ul className="modal-features-list">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{ listStyleType: 'disc', marginLeft: '1.25rem' }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Measurable Results */}
          {project.results && (
            <div className="modal-box" style={{ background: '#f8fafc', borderLeft: '4px solid var(--primary)' }}>
              <h4 className="modal-box-title" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Trophy size={17} color="#0284c7" />
                <span>Results & Business Impact</span>
              </h4>
              <p className="modal-box-text">
                {project.results}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <GithubIcon size={16} />
              <span>View Repository</span>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          )}
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
