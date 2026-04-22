export default function Join() {
  const items = [
    {
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: "✓",
    },
    {
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: "✕",
    },
    {
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: "🎓",
    },
    {
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: "💼",
    },
  ];

  return (
    <section className="join-section" id="join">
      <div className="container">
        <div className="join-card">
          <div className="join-left">
            <div>
              <p className="join-small">Who Should Join?</p>
              <h2 className="join-title">Strategic Skill Enhancement</h2>
            </div>

            <img
              className="join-image"
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
              alt="People"
            />
          </div>

          <div className="join-grid">
            {items.map((item, index) => (
              <div className="join-item" key={index}>
                <div className="join-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}