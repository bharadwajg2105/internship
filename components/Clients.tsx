export default function Clients() {
  const logos = [
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Our Proven <span className="blue-text">Partnerships</span>
          </h2>
          <p>
            Trusted by Leading <span className="blue-text">Organizations</span>
          </p>
        </div>

        {/* Desktop Grid */}
        <ul className="clients-grid">
          {logos.map((logo, index) => (
            <li key={index} className="client-item">
              <img src={logo} alt="client" className="client-img" />
            </li>
          ))}
        </ul>

        {/* Mobile Marquee */}
        <div className="clients-mobile">
          <div className="clients-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="client-mobile-item">
                <img src={logo} alt="client" className="client-mobile-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}