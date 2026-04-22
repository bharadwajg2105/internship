export default function Stats() {
  const stats = [
    { number: "10K+", text: "Professionals Trained For Exceptional Career Success" },
    { number: "200+", text: "Sessions Delivered With Unmatched Learning Excellence" },
    { number: "5K+", text: "Active Learners Engaged In Dynamic Courses" },
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="stats-heading">
          <h2>
            Our <span className="blue-text">Track Record</span>
          </h2>
          <p>
            The Numbers Behind <span className="blue-text">Our Success</span>
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`stats-item ${index < 2 ? "with-border" : ""}`}
            >
              <div className="stats-pill">{item.number}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}