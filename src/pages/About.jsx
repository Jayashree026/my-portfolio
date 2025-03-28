import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          {/* Left Side - Intro */}
          <div className="about-intro">
            <h1 className="title">
              Hello, I'm <span className="name-highlight">Jayashree K</span>
            </h1>
            <h3 className="subtitle"><strong>Frontend Developer | React Developer | Tech Innovator</strong></h3>
            <p className="description">
              As a passionate Frontend Developer specializing in <strong>React</strong>, 
              I craft intuitive, high-performance web applications that merge 
              aesthetics with functionality. My expertise lies in solving real-time 
              challenges through clean, scalable, and maintainable code. With a deep 
              understanding of UI/UX principles and modern JavaScript frameworks, I build 
              seamless user experiences that enhance engagement and efficiency.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1Mq09e6QtV7cgCfAmL_S3F3jJ8WZAbohm" 
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>View My Resume</strong>
            </a>
          </div>

          {/* Right Side - Skills */}
          <div className="skills-grid">
            <div className="skill-item">
              <h4 className="skill-title">React Development</h4>
              <p className="skill-description">
                Building dynamic, high-performance, and scalable React applications with a focus on efficiency.
              </p>
            </div>
            <div className="skill-item">
              <h4 className="skill-title">UI/UX Engineering</h4>
              <p className="skill-description">
                Crafting seamless user interfaces with a deep understanding of design principles and accessibility.
              </p>
            </div>
            <div className="skill-item">
              <h4 className="skill-title">Real-Time Problem Solving</h4>
              <p className="skill-description">
                Implementing innovative solutions to optimize performance and enhance user engagement.
              </p>
            </div>
            <div className="skill-item">
              <h4 className="skill-title">Performance Optimization</h4>
              <p className="skill-description">
                Applying advanced techniques to ensure fast, smooth, and responsive web experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
