import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-wrapper">
        {/* EXPERIENCE 1 */}
        <div className="experience-card glass">
          <div className="exp-header">
            <span className="exp-icon">🤖</span>
            <div>
              <h3>Machine Learning Intern</h3>
              <p className="company">IVIS Labs Pvt. Ltd</p>
              <span className="duration">May 2025 – Aug 2025</span>
            </div>
          </div>

          <ul className="exp-points">
            <li>
              Worked on data preprocessing, feature engineering, and model
              evaluation using real-world healthcare datasets.
            </li>
            <li>
              Implemented machine learning models such as Logistic Regression
              and Gradient Boosting for predictive analysis.
            </li>
            <li>
              Collaborated with the development team to integrate ML models
              into Django-based web applications.
            </li>
          </ul>

          <div className="exp-tech">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>Django</span>
          </div>
        </div>

        {/* EXPERIENCE 2 */}
        <div className="experience-card glass">
          <div className="exp-header">
            <span className="exp-icon">🌐</span>
            <div>
              <h3>Portfolio Website Development – AI-Assisted UI & Optimization</h3>
              <p className="company">Self Project</p>
              <span className="duration">2025 – Present</span>
            </div>
          </div>

          <ul className="exp-points">
            <li>
              Designed and developed a modern personal portfolio using React
              with glassmorphism UI and smooth animations.
            </li>
            <li>
              Implemented reusable components, scroll-based navigation,
              and responsive layouts.
            </li>
            <li>
              Showcased projects, skills, education, and contact information
              in a recruiter-friendly format.
            </li>
          </ul>

          <div className="exp-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>UI Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
