import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="projects-grid">
          {/* PlaceSeries'O Project */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">PlaceSeries'O</h3>
              <p className="project-duration"><strong>2024</strong></p>
            </div>
            
            <div className="project-body">
              <ul className="project-features">
                <li className="project-feature">Curated 100+ premium resources for technical and aptitude preparation</li>
                <li className="project-feature">Enhanced user engagement by 40% through intuitive interface redesign</li>
                <li className="project-feature">Implemented adaptive testing algorithms for personalized learning</li>
                <li className="project-feature">Integrated analytics dashboard to track user progress and performance</li>
              </ul>
              
              <div className="project-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
              </div>
              
              <div className="project-actions">
              
                <a href="https://placeserieso.netlify.app/" className="project-link project-link--primary">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Gesture Control Project */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">Gesture Volume Control</h3>
              <p className="project-duration"><strong>2023</strong></p>
            </div>
            
            <div className="project-body">
              <ul className="project-features">
                <li className="project-feature">Developed computer vision algorithms for precise hand tracking</li>
                <li className="project-feature">Achieved 95% accuracy in gesture recognition for system control</li>
                <li className="project-feature">Optimized performance to reduce latency by 30%</li>
                <li className="project-feature">Enabled touchless interaction, reducing adjustment time by 40%.</li>
              </ul>
              
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">MediaPipe</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
              
              <div className="project-actions">
                <a href="https://github.com/Jayashree026/gesture-volume-control" className="project-link project-link--secondary">
                  <span>Source Code</span>
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;