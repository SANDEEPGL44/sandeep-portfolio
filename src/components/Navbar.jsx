import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "contact",
];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">SG</div>
        <span className="name">Sandeep G L</span>
      </div>

      <ul className="nav-links">
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? "active" : ""}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/8296455478"
        target="_blank"
        rel="noreferrer"
        className="talk-btn"
      >
        💬 Let’s Talk
      </a>
    </nav>
  );
}

export default Navbar;
