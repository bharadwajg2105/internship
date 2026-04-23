"use client";

import Image from "next/image";

export default function LeadModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <div className="lead-overlay" onClick={closeModal}>
      <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
        {/* Left Image */}
        <div className="lead-left">
          <Image
            src="/iimage.png"
            alt="Business Meeting"
            fill
            priority
            className="lead-image"
          />
        </div>

        {/* Right Form */}
        <div className="lead-right">
          <button className="lead-close" onClick={closeModal}>
            ✕
          </button>

          <h2>Enquire Now</h2>

          <form className="lead-form">
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <input type="tel" placeholder="+91 Phone Number" />
            <input type="text" placeholder="Enter company name" />

            <select>
              <option>Select Domain</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Healthcare</option>
            </select>

            <input type="text" placeholder="Enter No. of candidates" />

            <select>
              <option>Select Mode of Delivery</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            <input type="text" placeholder="Eg: Gurgaon, Delhi, India" />

            <button type="submit" className="lead-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}