import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* TEXT */}
        <p>
          Designed & Developed by <span>Sandeep G L</span> © 2026
        </p>

        {/* EMAIL */}
        <a
          href="mailto:sandeeplokesh44@gmail.com"
          className="footer-email"
        >
          📧 sandeeplokesh44@gmail.com
        </a>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/sandeep-g-l-98a903231"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            🔗
          </a>

          <a
            href="https://github.com/SANDEEPGL44"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            💻
          </a>

          <a
            href="https://wa.me/8296455478"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            💬
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
