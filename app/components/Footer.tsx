import { scrollToSection } from "../utils/scrollToSection";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#difference", label: "Why Us" },
  { href: "#facility", label: "Facility" },
  { href: "#licenses", label: "Licenses" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-brand">
          NatureExpert <span>Ayurvedic</span> Pvt. Ltd.
        </div>
        <div className="footer-copy" style={{ marginTop: 6 }}>
          Ministry of Ayush Licensed · Pune, India
        </div>
      </div>
      <ul className="footer-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={scrollToSection}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer-copy">© 2025 NatureExpert Ayurvedic Pvt. Ltd. All rights reserved.</div>
    </footer>
  );
}
