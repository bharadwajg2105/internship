"use client";

import { useLeadModal } from "@/components/LeadProvider";

export default function Footer() {
  const { openLead } = useLeadModal();

  return (
    <footer className="footer-exact">
      <div className="container">
        {/* top row */}
        <div className="footer-top-row">
          <div className="footer-brand-area">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              className="footer-main-logo"
            />

            <div className="footer-icons">
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">🐦</a>
              <a href="#">◎</a>
              <a href="#">▶</a>
            </div>
          </div>

          {/* Enquiry Button Opens Form */}
          <div className="footer-cta-area">
            <button
              className="footer-enquire-btn"
              onClick={openLead}
            >
              Enquire Now
            </button>

            <p>Speak with our Advisor</p>
          </div>
        </div>

        {/* line */}
        <div className="footer-line"></div>

        {/* middle row */}
        <div className="footer-mid-row">
          <div className="footer-left-col">
            <h3>Accredian</h3>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Why Accredian</a>
          </div>

          <div className="footer-right-col">
            <h3>Contact Us</h3>

            <p>
              Email us:{" "}
              <a href="mailto:enterprise@accredian.com">
                enterprise@accredian.com
              </a>
            </p>

            <p>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* line */}
        <div className="footer-line"></div>

        {/* bottom */}
        <p className="footer-copy">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}