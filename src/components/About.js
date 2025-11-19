import React, { useState, useEffect, useRef } from "react";
import '../styles/about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [activeGallery, setActiveGallery] = useState("all");

  // Gallery images data with categories
  const galleryImages = [
    // Company Visits
    {
      id: 1,
      src: '/lseg.jpg',
      title: "LSEG Technology Visit",
      desc: "Exploring financial technology innovations",
      category: "company"
    },
    {
      id: 2,
      src: '/24.jpg',
      title: "Zone 24x7 AI Labs",
      desc: "Learning AI/ML enterprise solutions",
      category: "company"
    },
    {
      id: 3,
      src: '/wso2s.jpg',
      title: "WSO2 Innovation Hub",
      desc: "Open-source technology exploration",
      category: "company"
    },
    // IEEE Volunteering
    {
      id: 4,
      src: '/open.jpg',
      title: "IEEE Open Week",
      desc: "Organizing tech exhibitions and workshops",
      category: "volunteer"
    },
    {
      id: 5,
      src: '/mercorn.jpg',
      title: "IEEE MERCON Conference",
      desc: "Supporting international tech conference",
      category: "volunteer"
    },
    {
      id: 6,
      src: '/robo.jpg',
      title: "IEEE Robotic Day",
      desc: "Coordinating robotics demonstrations",
      category: "volunteer"
    },
    {
      id: 7,
      src: '/hackelite.jpg',
      title: "IEEE Hackelite",
      desc: "Managing hackathon operations",
      category: "volunteer"
    },
    // Friends & Memories
    {
      id: 8,
      src: '/fit.jpg',
      title: "University Squad",
      desc: "Late night coding sessions with friends",
      category: "memories"
    },
    {
      id: 9,
      src: '/hardware.jpg',
      title: "Team spirit",
      desc: "First Year Hardware project squad",
      category: "memories"
    },
    {
      id: 10,
      src: '/mer.jpeg',
      title: "Project Celebration",
      desc: "Celebrating successful project",
      category: "memories"
    },
    {
      id: 11,
      src: '/zone.jpeg',
      title: "Study Group",
      desc: "Learning together, growing together",
      category: "memories"
    },
    {
      id: 12,
      src: '/IEEE.jpeg',
      title: "Tech Event ",
      desc: "Making memories at tech events",
      category: "memories"
    }
  ];

  const filteredImages = activeGallery === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGallery);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="tag">DISCOVER</span>
            <h1 className="main-title">
              Building the <span className="gradient">Future</span>
              <br />One Line at a Time
            </h1>
            <p className="hero-subtitle">
              Software Developer • IEEE Member • Innovation Enthusiast
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img 
  src={process.env.PUBLIC_URL + "/prop.jpg"} 
  alt="Shalini Madhuka" 
/>

                <div className="image-overlay">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Events</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">174</span>
                      <span className="stat-label">Scholarship</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-badge">
                <span className="badge-icon">⚡</span>
                <span>Available for opportunities</span>
              </div>
            </div>
            
            <div className="profile-content">
              <span className="subtitle">SOFTWARE DEVELOPER & IEEE MEMBER</span>
              <h2>Hi, I'm <span className="gradient">Shalini Madhuka</span></h2>
              <p className="lead-text">
                A passionate software developer and active IEEE member, currently pursuing BSc (Hons) 
                in Information Technology at the University of Moratuwa.
              </p>
              <p>
                I specialize in React Native, Java, and modern web technologies, creating solutions 
                that blend functionality with exceptional user experiences. Beyond coding, I'm 
                actively involved in the tech community through IEEE, organizing events and fostering 
                innovation.
              </p>

              <div className="highlights">
                <div className="highlight-item">
                  <div className="icon-wrapper">🎓</div>
                  <div>
                    <h4>Academic Excellence</h4>
                    <p>O/L: 9A • A/L: A2B (1.89 Z-score)</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon-wrapper">🏆</div>
                  <div>
                    <h4>Scholarship Holder</h4>
                    <p>Pass 174 - Merit Based Achievement</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="icon-wrapper">🤝</div>
                  <div>
                    <h4>IEEE Active Member</h4>
                    <p>Robotics & Automation Society 25/26</p>
                  </div>
                </div>
              </div>

              <div className="core-values">
                <div className="value-card">
                  <span className="value-icon">💡</span>
                  <h4>Innovation</h4>
                  <p>Creating cutting-edge solutions</p>
                </div>
                <div className="value-card">
                  <span className="value-icon">🤝</span>
                  <h4>Community</h4>
                  <p>Building together, growing together</p>
                </div>
                <div className="value-card">
                  <span className="value-icon">🎯</span>
                  <h4>Impact</h4>
                  <p>Making a real difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === "journey" ? "active" : ""}`}
              onClick={() => setActiveTab("journey")}
            >
              My Journey
            </button>
            <button 
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button 
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === "volunteer" ? "active" : ""}`}
              onClick={() => setActiveTab("volunteer")}
            >
              Volunteering
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "journey" && (
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2025 - Present</span>
                    <h3>IEEE RAS Member 25/26</h3>
                    <p>Active member of IEEE Robotics and Automation Society, contributing to innovative projects and community initiatives.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2024</span>
                    <h3>IEEE Event Volunteer</h3>
                    <p>Volunteered in multiple IEEE events including Open Week, MERCON, Robotic Day, and Hackelite, gaining valuable organizational experience.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2024</span>
                    <h3>Industry Exposure</h3>
                    <p>Visited leading tech companies: LSEG (FinTech), Zone 24x7 (AI/ML), and WSO2 (Open Source), gaining industry insights.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2023 - Present</span>
                    <h3>University of Moratuwa</h3>
                    <p>Pursuing BSc (Hons) in IT, focusing on Software Development, Mobile Apps, and AI/ML technologies.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="education-grid">
                <div className="edu-card featured">
                  <div className="edu-header">
                    <span className="edu-badge">Current</span>
                    <span className="edu-year">2023 - Present</span>
                  </div>
                  <h3>BSc (Hons) in Information Technology</h3>
                  <h4>University of Moratuwa</h4>
                  <p>Specializing in Software Engineering, Mobile Development, and Web Technologies</p>
                  <div className="edu-highlights">
                    <span className="highlight-tag">Full Stack Development</span>
                    <span className="highlight-tag">Mobile Apps</span>
                    <span className="highlight-tag">AI/ML</span>
                  </div>
                </div>

                <div className="edu-card">
                  <div className="edu-header">
                    <span className="edu-badge achievement">🏆 Scholarship</span>
                    <span className="edu-year">2023</span>
                  </div>
                  <h3>Scholarship Achievement</h3>
                  <h4>Pass 174 - Merit Based</h4>
                  <p>Awarded scholarship for academic excellence and outstanding performance in competitive examinations.</p>
                </div>

                <div className="edu-card">
                  <div className="edu-header">
                    <span className="edu-badge success">Excellence</span>
                    <span className="edu-year">2020 - 2022</span>
                  </div>
                  <h3>G.C.E Advanced Level</h3>
                  <h4>Mathematics Stream</h4>
                  <div className="results">
                    <div className="result-item">
                      <span className="result-label">Results:</span>
                      <span className="result-value">A2B</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Z-Score:</span>
                      <span className="result-value">1.89</span>
                    </div>
                  </div>
                  <p>Strong foundation in analytical thinking and problem-solving.</p>
                </div>

                <div className="edu-card">
                  <div className="edu-header">
                    <span className="edu-badge success">9A</span>
                    <span className="edu-year">2019</span>
                  </div>
                  <h3>G.C.E Ordinary Level</h3>
                  <h4>Outstanding Achievement</h4>
                  <p>Achieved 9A passes, showcasing excellence across Mathematics, Science, and Languages.</p>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="experience-section">
                <div className="company-visit">
                  <div className="visit-header">
                    <img src="lseg.jpg" alt="LSEG" className="company-logo" />
                    <div>
                      <h3>London Stock Exchange Group (LSEG)</h3>
                      <p className="visit-type">Technology & Innovation Visit</p>
                    </div>
                  </div>
                  <p>Explored cutting-edge financial technology, high-frequency trading systems, and data analytics solutions driving modern financial markets.</p>
                  <div className="visit-tags">
                    <span>FinTech</span>
                    <span>Trading Systems</span>
                    <span>Data Analytics</span>
                  </div>
                </div>

                <div className="company-visit">
                  <div className="visit-header">
                    <img src="zone.jpeg" alt="Zone 24x7" className="company-logo" />
                    <div>
                      <h3>Zone 24x7</h3>
                      <p className="visit-type">AI/ML Solutions Experience</p>
                    </div>
                  </div>
                  <p>Gained insights into AI/ML applications in customer service, virtual assistants, and enterprise automation.</p>
                  <div className="visit-tags">
                    <span>AI/ML</span>
                    <span>NLP</span>
                    <span>Automation</span>
                  </div>
                </div>

                <div className="company-visit">
                  <div className="visit-header">
                    <img src="wso2.jpg" alt="WSO2" className="company-logo" />
                    <div>
                      <h3>WSO2</h3>
                      <p className="visit-type">Open Source Enterprise Solutions</p>
                    </div>
                  </div>
                  <p>Learned about enterprise integration, API management, and the power of open-source in building scalable systems.</p>
                  <div className="visit-tags">
                    <span>Open Source</span>
                    <span>API Management</span>
                    <span>Integration</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "volunteer" && (
              <div className="volunteer-section">
                <div className="volunteer-header">
                  <div className="ieee-badge">
                    <span className="ieee-logo">⚡</span>
                    <div>
                      <h3>IEEE Robotics & Automation Society</h3>
                      <p>Active Member 2025/2026</p>
                    </div>
                  </div>
                </div>

                <div className="volunteer-grid">
                  <div className="volunteer-card">
                    <div className="volunteer-icon">🌐</div>
                    <h4>IEEE Open Week</h4>
                    <p>Organized tech exhibitions, managed workshops, and coordinated student engagement activities.</p>
                    <span className="volunteer-role">Event Coordinator</span>
                  </div>

                  <div className="volunteer-card">
                    <div className="volunteer-icon">📡</div>
                    <h4>IEEE MERCON</h4>
                    <p>Supported international conference operations, assisted speakers, and managed technical sessions.</p>
                    <span className="volunteer-role">Conference Support</span>
                  </div>

                  <div className="volunteer-card">
                    <div className="volunteer-icon">🤖</div>
                    <h4>IEEE Robotic Day</h4>
                    <p>Coordinated robotics demonstrations, managed competitions, and engaged with participants.</p>
                    <span className="volunteer-role">Competition Manager</span>
                  </div>

                  <div className="volunteer-card">
                    <div className="volunteer-icon">💻</div>
                    <h4>IEEE Hackelite</h4>
                    <p>Managed hackathon operations, supported teams, and ensured smooth event execution.</p>
                    <span className="volunteer-role">Operations Lead</span>
                  </div>
                </div>

                <div className="volunteer-impact">
                  <h3>Community Impact</h3>
                  <div className="impact-stats">
                    <div className="impact-item">
                      <span className="impact-number">4+</span>
                      <span className="impact-label">Events Organized</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-number">500+</span>
                      <span className="impact-label">Students Reached</span>
                    </div>
                    <div className="impact-item">
                      <span className="impact-number">100+</span>
                      <span className="impact-label">Hours Volunteered</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Moments & <span className="gradient">Memories</span></h2>
          <p className="section-subtitle">Capturing my journey through tech, volunteering, and friendship</p>
          
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${activeGallery === "all" ? "active" : ""}`}
              onClick={() => setActiveGallery("all")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeGallery === "company" ? "active" : ""}`}
              onClick={() => setActiveGallery("company")}
            >
              Company Visits
            </button>
            <button 
              className={`filter-btn ${activeGallery === "volunteer" ? "active" : ""}`}
              onClick={() => setActiveGallery("volunteer")}
            >
              IEEE Events
            </button>
            <button 
              className={`filter-btn ${activeGallery === "memories" ? "active" : ""}`}
              onClick={() => setActiveGallery("memories")}
            >
              Friends & Fun
            </button>
          </div>
          
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                  <p>{image.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   

    </div>
  );
};

export default About;