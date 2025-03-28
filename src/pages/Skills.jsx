import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiVite, SiNetlify, SiGooglechrome } from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Responsive Design", icon: "📱" },
  ];

  const toolsPlatforms = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: "📝" },
    { name: "Vite", icon: <SiVite /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Chrome DevTools", icon: <SiGooglechrome /> },
    { name: "Testing Basics", icon: "🖥️" },
  ];

  return (
    <section className="skills-section">
      <div className="container text-center">
        <h2 className="skills-title">Skills</h2>

        <div className="row justify-content-center">
          {/* Frontend Skills */}
          <div className="col-lg-5 col-md-6 skills-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="col-lg-5 col-md-6 skills-category">
            <h3 className="category-title">Tools & Platforms</h3>
            <div className="skills-list">
              {toolsPlatforms.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
