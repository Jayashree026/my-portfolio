import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the desired section
  const scrollToSection = (ref) => {
    if (ref.current) {
      console.log("Scrolling to:", ref.current); // Debugging log
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Ref is null:", ref); // Debugging log
    }
  };

  // Debugging: Check if refs are correctly assigned
  useEffect(() => {
    console.log("Refs Assigned:", {
      aboutRef: aboutRef.current,
      skillsRef: skillsRef.current,
      experienceRef: experienceRef.current,
      projectsRef: projectsRef.current,
      educationRef: educationRef.current,
      contactRef: contactRef.current,
    });
  }, []);

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />

      <main className="container mt-4">
        {/* Sections with unique class names for debugging */}
        <section ref={aboutRef} className="section" id="about">
          <About />
        </section>
        <section ref={skillsRef} className="section" id="skills">
          <Skills />
        </section>
        <section ref={experienceRef} className="section" id="experience">
          <Experience />
        </section>
        <section ref={projectsRef} className="section" id="projects">
          <Projects />
        </section>
        <section ref={educationRef} className="section" id="education">
          <Education />
        </section>
        <section ref={contactRef} className="section" id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
