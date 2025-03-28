import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech - Information Technology",
      university: "Sri Sairam Institute of Technology",
      year: "2020 - 2024",
      icon: "🎓",
      description: "8.94/10",
    },
    {
      degree: "HSC- XII Computer Science",
      university: "Sri Sankara Vidyalaya",
      year: "2019 - 2020",
      icon: "🏛️",
      description: "81.5 %",
    },
    {
      degree: "SSLC - X",
      university: "Neelan Matriculation",
      year: "2017 - 2018",
      icon: "🏛️",
      description: "94.6 %",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="education-title">Education</h2>
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div key={index} className="education-box">
              <span className="edu-icon">{edu.icon}</span>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-university">{edu.university}</p>
              <span className="education-year">{edu.year}</span>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
