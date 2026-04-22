import {
  Lightbulb,
  Brain,
  Users,
  ChartColumnIncreasing,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";

export default function Expertise() {
  const items = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Brain },
    { title: "Leadership Elevation", icon: Users },
    { title: "Tech & Data Insights", icon: ChartColumnIncreasing },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },
    { title: "Fintech Innovation Lab", icon: Banknote },
  ];

  return (
    <section id="expertise" className="expertise-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Our <span className="blue-text">Domain Expertise</span>
          </h2>
          <p>Specialized Programs Designed to Fuel Innovation</p>
        </div>

        <div className="expertise-wrap">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="expertise-box">
                <Icon className="expertise-svg" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}