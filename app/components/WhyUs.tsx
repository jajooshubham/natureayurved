const ICONS = {
  ayush: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  expertise: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  coverage: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  privateLabel: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ),
  rnd: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3zM8 12h8M12 8v8" />
    </svg>
  ),
  quality: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const CARDS = [
  {
    icon: ICONS.ayush,
    title: "Ministry of Ayush License",
    text: "One of a handful of manufacturers in India with an official Ayush license — giving your product regulatory credibility that competitors can't fake.",
  },
  {
    icon: ICONS.expertise,
    title: "40+ Years In-House Expertise",
    text: "Our formulation lead has spent four decades studying Ayurvedic herbs, actives, and carrier systems. This isn't outsourced R&D — it lives inside our walls.",
  },
  {
    icon: ICONS.coverage,
    title: "Full-Category Coverage",
    text: "Skincare, haircare, body care — under one roof, one quality standard, one point of contact. No stitching together three different vendors.",
  },
  {
    icon: ICONS.privateLabel,
    title: "Private Label Ready",
    text: "From formulation to finished, labelled product — we handle the entire chain so you can focus on building your brand, not managing supply.",
  },
  {
    icon: ICONS.rnd,
    title: "Custom Formulation R&D",
    text: "Have an idea but no formula? We collaborate to translate your brief into a unique, efficacious product — with Ayurvedic principles baked in from day one.",
  },
  {
    icon: ICONS.quality,
    title: "Quality You Can Certify",
    text: "Rigorous in-house testing, documented batch records, and compliance-first processes — so you can market with confidence and sleep easy.",
  },
];

export function WhyUs() {
  return (
    <section className="diff-section" id="difference">
      <div className="section-tag">Why NatureExpert</div>
      <h2 className="section-heading">
        Not just another
        <br />
        contract manufacturer.
      </h2>
      <p className="section-body">
        We don't just fill bottles. We build formulations that solve real problems — backed by
        decades of hands-on R&D and a license no one casually acquires.
      </p>

      <div className="diff-grid">
        {CARDS.map((card) => (
          <div className="diff-card" key={card.title}>
            <div className="diff-icon">{card.icon}</div>
            <div className="diff-title">{card.title}</div>
            <div className="diff-text">{card.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
