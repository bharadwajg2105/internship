"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      alt: "Bayer",
      text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      alt: "Reliance",
      text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."`,
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      alt: "ADP",
      text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const first = testimonials[index];
  const second = testimonials[(index + 1) % testimonials.length];

  return (
    <section id="testimonials" className="testi-section">
      <div className="container">
        {/* Heading */}
        <div className="testi-head">
          <h2 className="testi-title">
            Testimonials from <span className="blue-text">Our Partners</span>
          </h2>

          <p className="testi-subtitle">
            What <span className="blue-text">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Cards */}
        <div className="testi-grid">
          {[first, second].map((item, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-logo-wrap">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="testi-logo"
                />
              </div>

              <p className="testi-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="testi-controls">
          <button
            className="testi-dot"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          ></button>

          <button
            className="testi-dot active"
            onClick={nextSlide}
            aria-label="Next testimonial"
          ></button>
        </div>
      </div>
    </section>
  );
}