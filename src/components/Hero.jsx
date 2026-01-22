import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow"></div>

      <div className="hero-card" data-aos="zoom-in">
        <p className="hero-tag">👋 Hello, I'm</p>

        <h1 className="hero-name">
          Sandeep <span>G L</span>
        </h1>

        {/* UPDATED ROLE */}
        <h2 className="hero-role">
          Machine Learning & Full Stack Developer
        </h2>

        {/* UPDATED DESCRIPTION */}
        <p className="hero-desc">
          I build intelligent healthcare prediction systems, scalable web
          applications, and modern portfolio websites using Machine Learning,
          Python, Django, React, and data-driven technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
