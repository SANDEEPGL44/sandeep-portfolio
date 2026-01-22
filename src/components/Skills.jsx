import "./Skills.css";

const skillsData = {
  Frontend: [
    { name: "HTML5", level: 90, icon: "📄" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Bootstrap", level: 80, icon: "🅱️" },
  ],

  Backend: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Django", level: 85, icon: "🌱" },
    { name: "REST APIs", level: 80, icon: "🔗" },
    { name: "MySQL", level: 85, icon: "🛢️" },
  ],

  "Machine Learning": [
    { name: "Pandas", level: 90, icon: "🐼" },
    { name: "NumPy", level: 90, icon: "🔢" },
    { name: "Scikit-learn", level: 85, icon: "📈" },
    { name: "Data Analysis", level: 85, icon: "🧠" },
  ],
};

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className="skills-heading">{category}</h3>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>

                  <div className="skill-info">
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>

                    <span className="skill-label">Proficiency</span>

                    <div className="progress">
                      <span style={{ width: `${skill.level}%` }}></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
