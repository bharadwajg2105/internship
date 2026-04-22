"use client";

import { useLeadModal } from "@/components/LeadProvider";

export default function Hero() {
  const { openLead } = useLeadModal();

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-left">
            <h1 className="hero-title">
              Next-Gen <span>Expertise</span>
              <br />
              For Your <span>Enterprise</span>
            </h1>

            <p className="hero-subtitle">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="hero-list">
              <li>✓ Tailored Solutions</li>
              <li>✓ Industry Insights</li>
              <li>✓ Expert Guidance</li>
            </ul>

            <div className="hero-btn-wrap">
              <button className="hero-btn" onClick={openLead}>
                Enquire Now
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="Hero"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}