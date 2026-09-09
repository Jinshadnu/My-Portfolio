import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const categories = ['All', 'Flutter', 'Android', 'Web', 'Desktop'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section section-alt">
      <div className="container reveal">
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </span>
          <h2 className="section-title">Projects &amp; Case Studies</h2>
          <p className="section-subtitle">
            A selection of mission-critical enterprise systems, consumer applications, and responsive web platforms I've engineered.
          </p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
