export default function HowItWorks() {
  const steps = [
    {
      id: "1",
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: "chart",
    },
    {
      id: "2",
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: "presentation",
    },
    {
      id: "3",
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: "monitor",
    },
  ];

  const renderIcon = (type: string) => {
    if (type === "chart") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 16v5" />
          <path d="M16 14v7" />
          <path d="M20 10v11" />
          <path d="M4 18v3" />
          <path d="M8 14v7" />
          <path d="M22 3l-8.6 8.6a.5.5 0 0 1-.7 0L9.3 8.3a.5.5 0 0 0-.7 0L2 15" />
        </svg>
      );
    }

    if (type === "presentation") {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h20" />
          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
          <path d="m7 21 5-5 5 5" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 7.75a.75.75 0 0 1 1.14-.64l3.66 2.25a.75.75 0 0 1 0 1.28l-3.66 2.25a.75.75 0 0 1-1.14-.64z" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <rect x="2" y="3" width="20" height="14" rx="2" />
      </svg>
    );
  };

  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <div className="how-head">
          <h2 className="how-title">
            How We <span className="blue-text">Deliver Results</span> That Matter?
          </h2>

          <p className="how-subtitle">
            A Structured Three-Step Approach to{" "}
            <span className="blue-text">Skill Development</span>
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <div className="how-card" key={step.id}>
              <div className="side-bar left-bar"></div>
              <div className="side-bar right-bar"></div>

              <div className="step-badge">{step.id}</div>

              <div className="icon-circle">{renderIcon(step.icon)}</div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}