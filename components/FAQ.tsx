"use client";

import { useState } from "react";
import LeadModal from "./LeadModal"; // adjust path if needed

export default function Faq() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showModal, setShowModal] = useState(false);

  const faqData = {
    course: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer expertise in Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
    ],
    delivery: [
      {
        q: "How are programs delivered?",
        a: "Programs are delivered through live online sessions, blended learning, workshops, and custom corporate cohorts.",
      },
      {
        q: "Can training be customized for teams?",
        a: "Yes, content, duration, delivery format, and assessments can all be customized.",
      },
    ],
    misc: [
      {
        q: "Do participants receive certificates?",
        a: "Yes, eligible programs include completion certificates.",
      },
      {
        q: "How can we enquire for enterprise training?",
        a: "Use the Enquire Now button below to connect with the team.",
      },
    ],
  };

  const current =
    activeTab === "course"
      ? faqData.course
      : activeTab === "delivery"
      ? faqData.delivery
      : faqData.misc;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="faq-section">
        <div className="container">
          <h2 className="faq-title">
            Frequently Asked <span className="blue-text">Questions</span>
          </h2>

          <div className="faq-layout">
            {/* Left Buttons */}
            <div className="faq-tabs">
              <button
                className={`faq-tab ${activeTab === "course" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("course");
                  setOpenIndex(0);
                }}
              >
                About the Course
              </button>

              <button
                className={`faq-tab ${activeTab === "delivery" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("delivery");
                  setOpenIndex(0);
                }}
              >
                About the Delivery
              </button>

              <button
                className={`faq-tab ${activeTab === "misc" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("misc");
                  setOpenIndex(0);
                }}
              >
                Miscellaneous
              </button>
            </div>

            {/* Right FAQs */}
            <div className="faq-right">
              {current.map((item, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={`faq-arrow ${
                        openIndex === index ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="faq-answer">{item.a}</div>
                  )}
                </div>
              ))}

              <div className="faq-btn-wrap">
                <button
                  className="faq-btn"
                  onClick={() => setShowModal(true)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <LeadModal closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}