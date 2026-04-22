"use client";

import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how", label: "How It Works" },
  { id: "faq", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const closeMenu = () => setOpen(false);

  const handleClick = (id: string) => {
    setActive(id);
    closeMenu();
  };

  return (
    <>
      <header className="navbar-main">
        <div className="container navbar-wrap">
          {/* Logo */}
          <a href="#home" className="nav-logo-wrap" onClick={() => setActive("home")}>
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              className="nav-logo"
            />
          </a>

          {/* Desktop */}
          <nav className="nav-desktop">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`nav-link ${active === link.id ? "active-link" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      {/* Sidebar */}
      <aside className={`mobile-sidebar ${open ? "show-sidebar" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>

        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => handleClick(link.id)}
            className={active === link.id ? "active-link" : ""}
          >
            {link.label}
          </a>
        ))}
      </aside>
    </>
  );
}