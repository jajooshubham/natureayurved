import { useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#difference", label: "Why Us" },
  { href: "#facility", label: "Facility" },
  { href: "#licenses", label: "Licenses" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    scrollToSection(event);
    setOpen(false);
  }

  return (
    <nav id="nav">
      <a href="#" className="nav-logo" onClick={handleLinkClick}>
        NatureExpert <span>Ayurvedic</span>
      </a>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-links-cta">
          <a href="#contact" className="nav-cta" onClick={handleLinkClick}>
            Work With Us →
          </a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta nav-cta-desktop" onClick={handleLinkClick}>
        Work With Us →
      </a>
      <button
        className="nav-mobile-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕" : "☰"}
      </button>
    </nav>
  );
}
