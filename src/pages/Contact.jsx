import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Heading Section */}
        <h2 className="contact-title">Connect With Me</h2>
        <p className="contact-tagline">
          Let’s collaborate, share ideas, and grow together!
        </p>

        {/* Cards Section */}
        <div className="contact-grid">
          
          <div className="highlight-box">
            <h4>Expand Your Network</h4>
            <p>
              Meaningful connections lead to greater opportunities. Let's connect and support each other's professional growth.
            </p>
          </div>
          <div className="highlight-box">
            <h4>Innovate and Create</h4>
            <p>
              Passionate about building impactful solutions? Let's exchange ideas and bring innovative projects to life!
            </p>
          </div>
          <div className="highlight-box">
            <h4>Collaboration with Knowledge</h4>
            <p>
              Open to discussions on tech, design, and problem-solving? I’d like to share insights and explore new possibilities.
            </p>
          </div>
        </div>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/jayashreekj/"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with Me on LinkedIn 🚀
        </a>
      </div>
    </section>
  );
};

export default Contact;
