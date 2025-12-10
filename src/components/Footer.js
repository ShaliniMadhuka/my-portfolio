import React from "react";
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      icon: "💼", 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/bangamuwage-shalini-madhuka-dilhari-b10698305/",
      color: "#0077b5"
    },
    { 
      icon: "💻", 
      name: "GitHub", 
      href: "https://github.com/ShaliniMadhuka",
      color: "#333"
    },
    { 
      icon: "📧", 
      name: "Email", 
      href: "mailto:madukadilhari63@gmail.com",
      color: "#ea4335"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-col footer-brand">
            <div className="brand-header">
              <div className="brand-icon">SM</div>
              <h3>Shalini Madhuka</h3>
            </div>
            <p className="brand-description">
              Software Developer passionate about creating innovative solutions and contributing to the tech community through IEEE.
            </p>
          
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    <span className="link-icon">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>Colombo, Sri Lanka</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <span>madukadilhari63@gmail.com</span>
              </li>
              <li>
                <span className="contact-icon">🎓</span>
                <span>University of Moratuwa</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-title">Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noreferrer" : undefined}
                  className="social-btn"
                  title={social.name}
                  style={{ '--social-color': social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="cta-box">
              <p className="cta-text">Available for opportunities</p>
              <a href="#contact" className="cta-btn">Let's Talk</a>
            </div>
          </div>
        </div>
             <div className="footer-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_MAP_CODE_HERE"
    width="100%"
    height="150"
    style={{ border: 0, borderRadius: "10px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <strong>Shalini Madhuka</strong>. All rights reserved.
            </p>
            <div className="footer-links-bottom">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms</a>
              <span>•</span>
              <a href="#sitemap">Sitemap</a>
            </div>
            <p className="made-with">
              Made with <span className="heart">❤️</span> and <span className="code">{'</>'}</span>
            </p>
          </div>
        </div>
      </div>
 

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
        <span>↑</span>
      </button>

     
    </footer>
  );
};

export default Footer;