import React, { useState } from "react";
import '../styles/projects.css';

const projects = [
  {
    id: 1,
    
 img: process.env.PUBLIC_URL + '/hardware.jpg',
    title: "Laser Tunes",
    desc: "IoT-based hardware project featuring ESP32 microcontrollers for interactive laser-controlled music system.",
    category: "Hardware",
    tech: ["ESP32", "IoT", "C++", "Arduino"],
    featured: true,
    date: "2024",
    github: "https://github.com/kevizamarz/LaserTunesCode",
    details: "Complete hardware project using ESP32 microcontrollers to create an innovative laser-controlled music interface. Features real-time sensor integration, wireless connectivity, and custom-built circuit design."
  },
  {
    id: 2,
   img: process.env.PUBLIC_URL + '/leo.png',
    title: "AlgoArena - Figma Design",
    desc: "Competition-winning UI/UX design for AlgoArena, selected for the next round by University of Jayawardhanapura.",
    category: "UI/UX Design",
    tech: ["Figma", "UI/UX", "Design System"],
    featured: true,
    date: "2024",
    github: "https://www.figma.com/proto/8gen3GRq605PL8a1ks2etW/Untitled?node-id=26-591&t=Ci6aq3jq9PB6mfJR-1",
    details: "Award-winning design submission for AlgoArena competition organized by University of Jayawardhanapura. Features modern UI patterns, comprehensive design system, and user-centered interface design that advanced to the next competition round."
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + '/caferia.png',
    title: "Caferia Website",
    desc: "Modern, responsive website design for Caferia cafe featuring elegant aesthetics and seamless user experience.",
    category: "Web Development",
    tech: ["React", "CSS3", "Responsive"],
    featured: false,
    date: "2024",
    github: "https://github.com/ShaliniMadhuka/cafe-fullstack-app",
    details: "Complete website solution for Caferia cafe with focus on visual appeal and functionality. Includes menu showcase, online ordering interface, and mobile-responsive design for enhanced customer engagement."
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Hardware", "UI/UX Design", "Web Development"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-bg">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>

        <div className="projects-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">My Work</span>
            <span className="label-line"></span>
          </div>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Showcasing my expertise in hardware development, UI/UX design, and web development.
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => openProjectDetails(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured</span>
                </div>
              )}

              <div className="card-image-wrapper">
                <img src={project.img} alt={project.title} className="card-image" />
                <div className="image-overlay">
                  <span className="view-icon">👁️ View Details</span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="category-tag">
                    <span className="tag-dot"></span>
                    {project.category}
                  </div>
                  <span className="project-date">{project.date}</span>
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProjectDetails}>×</button>
            
            <div className="modal-image">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>

            <div className="modal-details">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="category-tag">
                  <span className="tag-dot"></span>
                  {selectedProject.category}
                </div>
              </div>

              <p className="modal-description">{selectedProject.details}</p>

              <div className="tech-stack">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                <span>💻</span> View on GitHub / Figma
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;