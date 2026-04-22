export default function ContactCTA() {
  return (
    <section id="supportSection" className="cta-section">
      <div className="container">
        <div className="cta-box">
          {/* circles background */}
          <span className="cta-ring ring-1"></span>
          <span className="cta-ring ring-2"></span>
          <span className="cta-ring ring-3"></span>

          {/* icon */}
          <div className="cta-icon-shell">
            <div className="cta-icon-inner">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 8C22.1 8 23 8.9 23 10V14C23 15.1 22.1 16 21 16H19.94C19.45 19.95 16.08 23 12 23V21C15.31 21 18 18.31 18 15V9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9V16H3C1.9 16 1 15.1 1 14V10C1 8.9 1.9 8 3 8H4.06C4.55 4.05 7.92 1 12 1C16.08 1 19.45 4.05 19.94 8H21ZM7.76 15.78L8.82 14.09C9.74 14.67 10.83 15 12 15C13.17 15 14.26 14.67 15.18 14.09L16.24 15.78C15.01 16.55 13.56 17 12 17C10.44 17 8.99 16.55 7.76 15.78Z" />
              </svg>
            </div>
          </div>

          {/* text */}
          <h2 className="cta-title">
            Want to Learn More About Our Training Solutions?
          </h2>

          <p className="cta-subtitle">
            Get Expert Guidance for Your Team’s Success!
          </p>

          {/* button */}
          <button className="cta-btn">
            Contact Us
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}