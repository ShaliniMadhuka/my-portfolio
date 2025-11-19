import React, { useState } from "react";
import "../App.css";
import '../styles/contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "madukadilhari63@gmail.com",
      link: "mailto:madukadilhari63@gmail.com",
      color: "#ff6b6b"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/",
      color: "#0077b5"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "View my projects",
      link: "https://github.com/ShaliniMadhuka",
      color: "#333"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "0760273368",
      link: "tel:0760273368",
      color: "#25d366"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Animated Background */}
        <div className="contact-bg-animation">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        {/* Section Header */}
        <div className="contact-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Get In Touch</span>
          </div>
          <h2 className="contact-title">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Methods Grid */}
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noreferrer" : undefined}
                className="contact-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="card-icon-wrapper">
                  <span className="card-icon">{method.icon}</span>
                  <div 
                    className="icon-glow"
                    style={{ background: method.color }}
                  ></div>
                </div>
                <h3 className="card-title">{method.title}</h3>
                <p className="card-value">{method.value}</p>
                <div className="card-arrow">
                  <span>→</span>
                </div>
                <div 
                  className="card-border"
                  style={{
                    opacity: hoveredCard === index ? 1 : 0,
                    background: `linear-gradient(135deg, ${method.color}, transparent)`
                  }}
                ></div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>I'll get back to you within 24 hours</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <div className="input-border"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
                <div className="input-border"></div>
              </div>

              <button type="submit" className="submit-button">
                <span className="button-text">Send Message</span>
                <span className="button-icon">✈️</span>
                <div className="button-shine"></div>
              </button>
            </form>

            {/* Social Links */}
            <div className="social-links">
              <p className="social-title">Or find me on</p>
             
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;