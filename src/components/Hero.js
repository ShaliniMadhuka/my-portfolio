import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Hero.css';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = React.useRef(null);

  const roles = [
    "Software Developer",
    "React Native Expert",
    "IEEE Member",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-overlay"></div>
          
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Auto-playing Background Video from Internet */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://media.istockphoto.com/id/1345354768/video/digital-data-moving-on-circuit-board-and-cpu-4k-loop-backgrounds.mp4?s=mp4-640x640-is&k=20&c=fFOZkEfzonX0W6HxxP0d_w2EKdocs3Hxf9xa7ee7flM=" type="video/mp4" />

        </video>

        <div className="hero-container">
          <div 
            className="floating-shape shape-1"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(138, 43, 226, 0.1)" d="M47.1,-57.1C59.9,-45.6,68.4,-29.2,71.3,-11.9C74.2,5.4,71.5,23.6,62.3,37.9C53.1,52.2,37.4,62.6,20.2,67.4C3,72.2,-15.7,71.4,-31.6,65C-47.5,58.6,-60.6,46.6,-68.1,31.4C-75.6,16.2,-77.5,-2.2,-73.1,-19.1C-68.7,-36,-58,-51.4,-43.8,-62.5C-29.6,-73.6,-12,-80.4,3.7,-84.8C19.4,-89.2,34.3,-68.6,47.1,-57.1Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="hero-content">
            <div className="hero-content-grid">
              <div className="hero-text">
                <div className="greeting-badge">
                  <span className="wave-emoji">👋</span>
                  <span className="greeting-text">Welcome to my portfolio</span>
                </div>

                <h1 className="hero-title">
                  Hi, I'm <span className="name-highlight">Shalini Madhuka</span>
                </h1>

                <div className="hero-subtitle">
                  <span className="subtitle-prefix">I'm a</span>
                  <div className="role-container">
                    <span 
                      key={currentRole} 
                      className="role-text"
                    >
                      {roles[currentRole]}
                    </span>
                  </div>
                </div>

                <p className="hero-description">
                  Passionate software developer specializing in React Native and Java. 
                  Currently pursuing BSc (Hons) in IT at University of Moratuwa. 
                 Member of IEEE Robotic And Automation Society University Of Moratuwa
                </p>

                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-icon">🎓</span>
                    <div>
                      <strong>Softaware Devoloper</strong>
                    
                    </div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">🏆</span>
                    <div>
                      <strong>Freelancer</strong>
                      
                    </div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">⚡</span>
                    <div>
                      <strong>UI/UX Desighner</strong>
                      
                    </div>
                  </div>
                </div>

                <div className="hero-buttons">
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowVideoModal(true);
                    }}
                  >
                    <span className="btn-text">Watch Video</span>
                    <span className="btn-icon">▶</span>
                  </a>

                  <Link to="/contact" className="btn btn-secondary">
                    <span className="btn-text">Get In Touch</span>
                    <span className="btn-icon">→</span>
                  </Link>
                </div>
              </div>

              <div className="hero-image-side">
                <div className="profile-image-wrapper">
                  <div className="profile-glow"></div>
                  <div className="profile-frame">
                    <img 
                      src={process.env.PUBLIC_URL + '/profile.jpg'}
                      alt="Shalini Madhuka" 
                      className="profile-photo" 
                    />
                  </div>
                  <div className="floating-badge badge-1">
                    <span>💻</span>
                    <p>Software Devoloper</p>
                  </div>
                  <div className="floating-badge badge-2">
                    <span>☕</span>
                    <p>Freelancer</p>
                  </div>
                  <div className="floating-badge badge-3">
                    <span>🎨</span>
                    <p>UI/UX Desighner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <p>Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Video Modal for myprofile.mp4 */}
      {showVideoModal && (
        <div 
          className="video-modal"
          onClick={() => {
            setShowVideoModal(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }}
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-close-btn"
              onClick={() => {
                setShowVideoModal(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
              }}
            >
              ✕
            </button>
            <video
              ref={videoRef}
              className="modal-video"
              controls
              autoPlay
              src={process.env.PUBLIC_URL + '/myprofile.mp4'}
            ></video>
          </div>
        </div>
      )}

      {/* ABOUT PREVIEW */}
      <section className="preview-section about-preview">
        <div className="preview-container">
          <span className="section-tag">WHO I AM</span>
          <h2 className="section-title">About <span className="gradient">Me</span></h2>
          <p className="section-desc">
            Software developer with academic excellence and industry exposure. 
            Skilled in React Native, Java, and web technologies with a passion for creating 
            impactful solutions.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <span>🎯</span>
              <h4>Goal-Oriented</h4>
              <p>Focused & determined</p>
            </div>
            <div className="info-card">
              <span>💡</span>
              <h4>Innovative</h4>
              <p>Creative solutions</p>
            </div>
            <div className="info-card">
              <span>⚡</span>
              <h4>Fast Learner</h4>
              <p>Quick adaptation</p>
            </div>
          </div>
          <Link to="/about" className="section-btn">
            Learn More →
          </Link>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="preview-section skills-preview">
        <div className="preview-container">
          <span className="section-tag">MY EXPERTISE</span>
          <h2 className="section-title">Technical <span className="gradient">Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-icon">⚛️</span>
              <h3>React & React Native</h3>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: '95%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-icon">☕</span>
              <h3>Java Development</h3>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🎨</span>
              <h3>UI/UX Design</h3>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-icon">🌐</span>
              <h3>Web Development</h3>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: '93%'}}></div>
              </div>
            </div>
          </div>
          <Link to="/skills" className="section-btn">
            View All Skills →
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="preview-section projects-preview">
        <div className="preview-container">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">Featured <span className="gradient">Projects</span></h2>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num"></span>
              <p>Active Volunteer</p>
            </div>
            <div className="stat-box">
              <span className="stat-num"></span>
              <p>Updated Devoper</p>
            </div>
            <div className="stat-box">
              <span className="stat-num"></span>
              <p>Smart Desighner</p>
            </div>
          </div>
          <Link to="/projects" className="section-btn">
            View Projects →
          </Link>
        </div>
      </section>

   
      
    </>
  );
};

export default Hero;