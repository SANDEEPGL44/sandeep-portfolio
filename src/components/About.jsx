import { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    const section = document.querySelector(".about-section");

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--x", `${e.clientX - rect.left}px`);
      section.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-wrapper">
        {/* LEFT PROFILE */}
        <div className="about-profile glass">
          <div className="profile-ring">
            <div className="profile-circle">
              <img src="/sandeep.jpeg" alt="Sandeep G L" />
            </div>
          </div>

          <h3>Sandeep G L</h3>
          <p className="email">sandeeplokesh44@gmail.com</p>

          <a href="/resume.pdf" download className="cv-btn">
            ⬇ Download CV
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content glass">
          <span className="work-badge">🟢 Open to Work</span>

          <p>
            I'm <span>Sandeep G L</span>, an <b>MCA graduate</b> with strong interest
            in <b>Machine Learning and Full Stack Web Development</b>, focused on
            building practical, real-world applications.
          </p>

          <p>
            I work with <b>Python, Machine Learning, Django, React, and
            JavaScript</b>. I have developed end-to-end projects including a
            healthcare prediction system and my personal portfolio website,
            emphasizing clean UI, structured backend logic, and scalable design.
          </p>

          <div className="about-bottom">
            <div className="mini-card">
              <h4>Experience</h4>

              <div className="role">
                <span>💼</span>
                <div>
                  <p>Machine Learning Intern</p>
                  <small>IVIS Labs Pvt. Ltd.</small>
                </div>
              </div>

              <div className="role">
                <span>💻</span>
                <div>
                  <p>Portfolio Website Development – AI-Assisted UI & Optimization</p>
                  <small>Personal Project (React)</small>
                </div>
              </div>
            </div>

            <div className="mini-card">
              <h4>Main Stacks</h4>
              <div className="stack-grid">
                <div>⚛️ Frontend (React, HTML, CSS)</div>
                <div>🛠 Backend (Python, Django)</div>
                <div>🗄 Database (MySQL, SQLite)</div>
                <div>🤖 Machine Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* ROTATING CIRCULAR TEXT */}
        <div className="circle-text">
          <svg viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100
                   m -75, 0
                   a 75,75 0 1,1 150,0
                   a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath">
                MACHINE LEARNING • WEB DEVELOPMENT • INDIA •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
