const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IsoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LICENSES = [
  { id: "lcAyush", name: "Ministry of Ayush License", issuer: "Ministry of Ayush, Govt. of India", tag: "Ayurvedic Manufacturing", icon: <DocIcon /> },
  { id: "lcGst", name: "GST Registration", issuer: "Government of India", tag: "Tax Compliance", icon: <DocIcon /> },
  { id: "lcIso", name: "ISO Certificate", issuer: "ISO Certifying Body", tag: "Quality Management", icon: <IsoIcon /> },
  { id: "lcFssai", name: "Manufacturing License", issuer: "State Licensing Authority", tag: "Manufacturing", icon: <DocIcon /> },
];

export function Licenses() {
  return (
    <section className="licenses-section" id="licenses">
      <div className="section-tag">Certifications &amp; Licenses</div>
      <h2 className="section-heading">
        Every certificate
        <br />
        we've earned.
      </h2>
      <p className="section-body">
        Our licenses aren't checkboxes — they're proof of what we've built.
      </p>

      <div className="licenses-grid">
        {LICENSES.map((license) => (
          <div className="license-card" key={license.id}>
            <div className="license-card-icon">{license.icon}</div>
            <div>
              <div className="license-name">{license.name}</div>
              <div className="license-issuer">{license.issuer}</div>
            </div>
            <span className="license-tag">{license.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
