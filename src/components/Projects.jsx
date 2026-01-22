import "./Projects.css";

const projects = [
  {
    title: "Proactive Cardiac Risk Prediction System",
    role: "Machine Learning & Full Stack Project",
    description: [
      "Developed a heart disease risk prediction system using machine learning algorithms such as Gradient Boosting and Logistic Regression.",
      "Performed data preprocessing, feature engineering, model training, and evaluation using Pandas, NumPy, and Scikit-learn.",
      "Integrated the trained ML model into a Django-based web application enabling patients to input health data, doctors to review reports, and admins to manage users."
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Django", "MySQL"],
    github: "https://github.com/SANDEEPGL44",
    showGithub: true,
  },
  {
    title: "Car Management System",
    role: "Web Application Project",
    description: [
      "Designed and developed an online platform for buying and selling vehicles.",
      "Enabled users to list, browse, and purchase cars, while allowing sellers to manage inventory efficiently.",
      "Focused on clean UI, structured data handling, and smooth user experience."
    ],
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    showGithub: false, // ❌ No GitHub button
  },
  {
    title: "Sandeep Portfolio Website",
    role: "Personal Portfolio Project",
    description: [
      "Designed and developed a modern personal portfolio website to showcase education, skills, projects, and contact details.",
      "Implemented glassmorphism UI, smooth scrolling navigation, hover animations, and responsive layout.",
      "Built using React with reusable components and optimized performance for different screen sizes."
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Glassmorphism UI"],
    github: "https://github.com/SANDEEPGL44",
    showGithub: true,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass" key={index}>
            <h3>{project.title}</h3>
            <span className="project-role">{project.role}</span>

            <ul className="project-desc">
              {project.description.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {/* ✅ Show GitHub button only if enabled */}
            {project.showGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                💻 View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
