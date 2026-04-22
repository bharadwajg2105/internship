"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = [
    { label: "Home", href: "#home" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#clients" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "CAT", href: "#cat" },
    { label: "How It Works", href: "#works" },
    { label: "FAQs", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className="brand"
          onClick={() => setActive("Home")}
        >
          <div className="brand-title">
            accred<span>ian</span>
          </div>
          <div className="brand-subtitle">credentials that matter</div>
        </a>

        {/* Nav */}
        <nav className="nav-links">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={active === item.label ? "active-link" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}