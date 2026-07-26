const SLOTS = [
  {
    id: "production",
    size: "large",
    label: "Production Floor",
    src: "/images/gallery/production-floor.jpg",
  },
  {
    id: "rnd",
    size: "tall",
    label: "R&D Lab",
    src: "/images/gallery/rnd-lab.jpg",
  },
  {
    id: "filling",
    size: "wide",
    label: "Filling Line",
    src: "/images/gallery/filling-line.jpg",
  },
  {
    id: "mixing",
    size: "small",
    label: "Mixing Tanks",
    src: "/images/gallery/mixing-tanks.jpg",
  },
  {
    id: "qc",
    size: "small",
    label: "QC Testing",
    src: "/images/gallery/qc-testing.jpg",
  },
  {
    id: "packaging",
    size: "small",
    label: "Packaging Area",
    src: "/images/gallery/packaging-area.jpg",
  },
] as const;

export function Gallery() {
  return (
    <section className="gallery-section" id="facility">
      <div className="gallery-header">
        <div>
          <div className="section-tag">Our Facility</div>
          <h2 className="section-heading">
            Built to produce.
            <br />
            Designed to impress.
          </h2>
        </div>
        <p className="section-body" style={{ maxWidth: 360, fontSize: 15 }}>
          A fully equipped manufacturing unit that handles everything from raw material intake to
          finished goods dispatch.
        </p>
      </div>

      <div className="gallery-grid">
        {SLOTS.map((slot) => (
          <div className={`gallery-item ${slot.size}`} key={slot.id}>
            <img src={slot.src} alt={slot.label} />
            <span className="gallery-label">{slot.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
