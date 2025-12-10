import React, { useState, useEffect } from 'react';
import '../styles/certification.css';

const Certification = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Add your certifications here
  const certifications = [
    {
      id: 1,
      title: "Caree Essentials in Software Development",
      organization: "Microsoft and Linkedin",
      date: "February 2025",
      category: "Software Development",
      credentialId: "MS-001",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom5.jpg`, 
      skills: ["Programming", "Software Development"],
      description: "Demonstrated expertise in designing distributed systems on AWS platform."
    },
    {
      id: 2,
      title: "Web Desighn for beginners",
      organization: "University Of Moratuwa",
      date: "November 2024",
      category: "Web Development",
      credentialId: "UOM-002",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom2.jpg`, 
      skills: ["React", "html", "css"],
      description: "Comprehensive course covering Html fundamentals to advanced concepts."
    },
    {
      id: 3,
      title: "Java Script Projects",
      organization: "Udemy",
      date: "May 2025",
      category: "Web Development",
      credentialId: "UD-003",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom7.jpg`, 
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      description: "End-to-end web development including frontend and backend technologies."
    },
    {
      id: 4,
      title: "Caree Essentials in Software Development",
      organization: "Microsoft and Linkedin",
      date: "February 2025",
      category: "Software Development",
      credentialId: "MS-004",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom3.jpg`, 
      skills: ["Programming", "Software Development"],
      description: "Demonstrated expertise in designing distributed systems on AWS platform."
    },
    {
      id: 5,
      title: "Web Devolopment",
      organization: "Alison",
      date: "February 2025",
      category: "Web Development",
      credentialId: "AL-005",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom9.png`, 
      skills: ["  Web Desighn"],
      description: "Comprehensive machine learning course covering supervised and unsupervised learning."
    },
    {
      id: 6,
      title: "Python From Zero to Hero",
      organization: "Udemy",
      date: "February 2025",
      category: "Programming",
      credentialId: "UD-006",
      verifyLink: "#",
      image: `${process.env.PUBLIC_URL}/certificates/uom6.jpg`, 
      skills: ["python Programming"],
      description: "Professional certification in Google Cloud Platform services and architecture."
    }
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesCategory;
  });

  // SVG Icons as components
  const AwardIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
  );

  const SmallAwardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const FilterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );

  return (
    <div className="certification-page">
      {/* Hero Section */}
      <section className={`cert-hero ${isVisible ? 'visible' : ''}`}>
        <div className="cert-hero-content">
          <div className="cert-hero-icon">
            <AwardIcon />
          </div>
          <h1 className="cert-hero-title">Certifications & Achievements</h1>
         
          
        </div>
        <div className="cert-hero-bg"></div>
      </section>



      {/* Certifications Grid */}
      <section className="cert-grid-section">
        <div className="cert-container">
          {filteredCertifications.length === 0 ? (
            <div className="no-results">
              <AwardIcon />
              <h3>No certifications found</h3>
              <p>Try adjusting your filter criteria</p>
            </div>
          ) : (
            <div className="cert-grid">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="cert-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="cert-card-header">
                    <div className="cert-badge">
                      <SmallAwardIcon />
                    </div>
                    <span className="cert-category">{cert.category}</span>
                  </div>

                  {/* Certificate Image */}
                  <div className="cert-image-container" style={{ width: '100%', height: '240px', background: 'rgba(0, 0, 0, 0.3)', padding: '10px', borderBottom: '1px solid rgba(138, 43, 226, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="cert-image"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="cert-image-placeholder" style={{ display: 'none', minHeight: '240px' }}>
                      <SmallAwardIcon />
                      <span>Certificate</span>
                    </div>
                  </div>
                  
                  <div className="cert-card-body">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-organization">{cert.organization}</p>
                    <p className="cert-description">{cert.description}</p>
                    
                    <div className="cert-meta">
                      <div className="cert-date">
                        <CalendarIcon />
                        <span>{cert.date}</span>
                      </div>
                      <div className="cert-id">
                        ID: {cert.credentialId}
                      </div>
                    </div>

                    <div className="cert-skills">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>


                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Certification;