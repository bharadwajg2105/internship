"use client";

import { useLeadModal } from "@/components/LeadProvider";

export default function ContactCTA() {
  const { openLead } = useLeadModal();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">
            Want to Learn More About Our Training Solutions?
          </h2>

          <p className="cta-subtitle">
            Get Expert Guidance for Your Team’s Success!
          </p>

          <button className="cta-btn" onClick={openLead}>
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}