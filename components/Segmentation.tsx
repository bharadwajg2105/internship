export default function Segmentation() {
  const cards = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    },
  ];

  return (
    <section className="segment-section" id="segmentation">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            Tailored <span className="blue-text">Course Segmentation</span>
          </h2>
          <p className="section-subtitle">
            Explore <span className="blue-text">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="segment-grid">
          {cards.map((item, index) => (
            <div className="segment-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="segment-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}