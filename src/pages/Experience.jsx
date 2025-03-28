import React, { useEffect } from "react";
import "../styles/Experience.css";

const Experience = () => {
  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline");
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          timeline.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {/* Big Bucks Innovation Experience */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Frontend Developer</h3>
              <span className="company">Big Bucks Innovation | Feb 2025 – Mar 2025</span>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Bootstrap, React.js
              </p>
              <ul className="experience-details">
                <li>▹ Developed a fully responsive website with a modern, intuitive UI, improving user engagement.</li>
                <li>▹ Implemented interactive components for better seamless navigation.</li>
                <li>
                ▹ Link: 
                  <a href="https://centurion-2-0.netlify.app/" target="_blank" rel="noopener noreferrer">
                    🔗 centurion-2-0.netlify.app
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ICT Academy Internship */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Data Science Intern</h3>
              <span className="company">ICT Academy | Aug 2023 – Oct 2023</span>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> Python, Data Science
              </p>
              <ul className="experience-details">
                <li>▹ Developed an all-in-one platform for 50+ domains and 100+ courses, improving learning for the users.</li>
                <li>▹ Reduced search time by 50%, boosting user satisfaction by 40%.</li>
                <li>▹ Used Kandi platform tools to ensure scalability and a user-friendly experience.</li>
                <li>▹ Project: Created a platform for exploring domains and accessing personalized courses, enhancing learning efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
