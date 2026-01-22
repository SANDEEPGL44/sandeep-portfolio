import "./Education.css";

function EduCard({ course, college, city, year, specialization, icon }) {
  return (
    <div className="edu-card">
      {/* ICON */}
      <div className="edu-icon">{icon}</div>

      {/* COURSE NAME (ALWAYS VISIBLE) */}
      <h3 className="edu-course">{course}</h3>

      {/* DETAILS (HIDDEN → SHOW ON HOVER) */}
      <div className="edu-details">
        <p><b>College:</b> {college}</p>
        <p><b>City:</b> {city}</p>
        <p><b>Duration:</b> {year}</p>
        <p><b>Specialization:</b> {specialization}</p>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        <EduCard
          course="Master of Computer Applications (MCA)"
          college="Maharaja Institute of Technology"
          city="Mysore, Karnataka"
          year="2024 – 2025"
          specialization="I completed my Master of Computer Applications with a specialization in software development and machine learning. The program focused on full-stack development, data structures, databases, cloud computing, and AI technologies, providing strong practical exposure through academic projects, internships, and real-world application development."
          icon="🎓"
        />

        <EduCard
          course="Bachelor of Science (B.Sc)"
          college="Government Science College"
          city="Hassan, Karnataka"
          year="2019 – 2022"
          specialization="I completed my Bachelor of Science in Physics, Mathematics, and Electronics, gaining strong analytical and problem-solving skills. The course strengthened my foundation in mathematical reasoning, electronic systems, and logical thinking, which supports my expertise in programming, data analysis, and technical problem-solving."
          icon="🎓"
        />
      </div>
    </section>
  );
}

export default Education;
