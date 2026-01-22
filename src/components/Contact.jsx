import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* HEADLINE */}
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Let's build something great together. I'm always open to discussing
        new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="contact-wrapper">
        {/* LEFT CARD */}
        <div className="contact-card">
          <h3>Contact Information</h3>

          <a
            href="mailto:sandeeplokesh44@gmail.com"
            className="contact-item"
          >
            <span className="icon">📧</span>
            <div>
              <small>Email</small>
              <p>sandeeplokesh44@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918296455478"
            className="contact-item"
          >
            <span className="icon">📞</span>
            <div>
              <small>Phone</small>
              <p>+91 82964 55478</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/sandeep-g-l-98a903231"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="icon">💼</span>
            <div>
              <small>LinkedIn</small>
              <p>linkedin.com/in/sandeep-g-l-98a903231</p>
            </div>
          </a>

          <a
            href="https://github.com/SANDEEPGL44"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="icon">💻</span>
            <div>
              <small>GitHub</small>
              <p>github.com/SANDEEPGL44</p>
            </div>
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-card">
          <h3>Send a Message</h3>

          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />

            <label>Email</label>
            <input type="email" placeholder="Your Email" required />

            <label>Subject</label>
            <input type="text" placeholder="What's this about?" />

            <label>Message</label>
            <textarea rows="4" placeholder="Your message..." required />

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
