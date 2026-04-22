export default function Hero() {
  return (
    <section id="home" className="section-space hero">
      <div className="container">
        <div className="hero-card-new">
          {/* Left */}
          <div className="hero-left">
            <h1 className="hero-title-new">
  <span className="line-one">
    Next-Gen <span className="blue-text">Expertise</span>
  </span>

  <span className="line-two">
    for Your <span className="blue-text">Enterprise</span>
  </span>
</h1>

            <p className="hero-desc-new">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="hero-list">
              <li>✔ Tailored Solutions</li>
              <li>✔ Industry Insights</li>
              <li>✔ Expert Guidance</li>
              <li className="mobile-only">✔ Measurable Impact</li>
            </ul>

            <div className="hero-btn-wrap">
              <button className="btn-primary hero-btn-new">
                <span>Enquire Now</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="headerImage"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}