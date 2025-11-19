import React, { useEffect, useState } from "react";
import '../styles/skills.css';

const skills = [
  { name: "HTML", level: 90, icon: "🌐", category: "Frontend", color: "#e34c26" },
  { name: "CSS", level: 85, icon: "🎨", category: "Frontend", color: "#264de4" },
  { name: "JavaScript", level: 80, icon: "⚡", category: "Frontend", color: "#f0db4f" },
  { name: "React", level: 75, icon: "⚛️", category: "Frontend", color: "#61dafb" },
  { name: "Node.js", level: 70, icon: "🟢", category: "Backend", color: "#68a063" },
  { name: "Git", level: 85, icon: "📦", category: "Tools", color: "#f34f29" },
  { name: "Figma", level: 80, icon: "🎯", category: "Design", color: "#a259ff" },
  { name: "TypeScript", level: 65, icon: "📘", category: "Frontend", color: "#007acc" },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "GitHub", icon: "🙀" },
  { name: "Webpack", icon: "📦" },
  { name: "npm", icon: "📮" },
  { name: "Postman", icon: "📬" },
  { name: "Chrome DevTools", icon: "🔧" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills-section');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const categories = ["All", "Frontend", "Backend", "Design", "Tools"];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-bg">
          <div className="bg-grid"></div>
          <div className="floating-icon icon-1">💻</div>
          <div className="floating-icon icon-2">⚡</div>
          <div className="floating-icon icon-3">🚀</div>
          <div className="floating-icon icon-4">🎨</div>
        </div>

        <div className="skills-header">
          <div className="section-badge">
            <span className="badge-line"></span>
            <span className="badge-text">What I Know</span>
            <span className="badge-line"></span>
          </div>
          <h2 className="skills-title">
            My <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills, tools, and technologies I work with to create amazing web experiences.
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="btn-text">{category}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                  <div 
                    className="icon-glow"
                    style={{ background: skill.color }}
                  ></div>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div className="skill-percentage">
                  <span className="percentage-number">{skill.level}</span>
                  <span className="percentage-symbol">%</span>
                </div>
              </div>

              <div className="skill-bar-wrapper">
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${isVisible ? 'animate' : ''}`}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>

              <div className="skill-experience">
                <span className="exp-label">Experience:</span>
                <span className="exp-value">
                  {skill.level >= 80 ? 'Expert' : skill.level >= 70 ? 'Advanced' : 'Intermediate'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <div className="tools-header">
            <h3 className="tools-title">
              <span className="tools-icon">🛠️</span>
              Tools & Technologies
            </h3>
            <p className="tools-subtitle">Essential tools I use daily for development</p>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-summary">
          <div className="stat-box">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <span className="stat-number">{skills.length}+</span>
              <span className="stat-label">Technical Skills</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-icon">🛠️</div>
            <div className="stat-content">
              <span className="stat-number">{tools.length}+</span>
              <span className="stat-label">Dev Tools</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <span className="stat-number">
                {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
              </span>
              <span className="stat-label">Avg. Proficiency</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;