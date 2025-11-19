import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  // Advanced scroll detection with hide/show on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setScrolled(currentScrollY > 50);
          
          // Hide navbar on scroll down, show on scroll up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Check if current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img 
                      src={process.env.PUBLIC_URL + '/shALMD.png'}
                      alt="Shalini Madhuka" 
                      className="std" 
                    />
            <span className="logo-dot">.</span>
          </Link>

          <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/skills", label: "Skills" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link 
                  to={path} 
                  className={`nav-link ${isActive(path) ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? "active" : ""}`}></span>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>

  
    </>
  );
};

export default Navbar;