import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <span className="project-category-badge">{project.categoryLabel || project.category}</span>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-short-desc">{project.shortDescription}</p>

        <div className="project-tech-tags">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="project-tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-tech-tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="project-actions">
          <button
            type="button"
            className="project-view-btn"
            onClick={() => onSelect(project)}
          >
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </button>

          <div className="project-ext-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-btn"
                title="View Source Code"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={17} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-btn"
                title="View Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
