import { scrollToSection } from "../utils/scrollToSection";

const STATS = [
  { num: "40", suffix: "+", label: "Years of formulation mastery" },
  { num: "3", suffix: "", label: "Product categories" },
  { num: "100", suffix: "%", label: "Ayurvedic formulations" },
  { num: "1", suffix: "", label: "Ministry of Ayush license" },
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-eyebrow">Ayurvedic Contract Manufacturer · Pune, India</div>
      <h1 className="hero-headline">
        Where Ancient
        <br />
        Science Meets
        <br />
        <span className="hl">Modern Scale.</span>
      </h1>
      <p className="hero-sub">
        NatureExpert Ayurvedic Pvt. Ltd. formulates, manufactures, and delivers skincare,
        haircare, and body care products — rooted in Ayurveda, built for today's brands.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary" onClick={scrollToSection}>
          Start Your Brand →
        </a>
        <a href="#facility" className="btn-outline" onClick={scrollToSection}>
          See Our Facility
        </a>
      </div>
      <div className="hero-stats">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="hero-stat-num">
              {stat.num}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="hero-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
