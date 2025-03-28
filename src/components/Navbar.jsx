import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu after clicking a link
    setExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            letterSpacing: '1px',
            fontFamily: '"Playfair Display", serif'
          }}
        >
          JS | DEV
      
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <li className="nav-item" key={item.toLowerCase()}>
                <a 
                  className="nav-link" 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;