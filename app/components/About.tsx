const FOUNDER_PHOTO = "/images/about/founder.jpg";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-tag">Our Story</div>
      <div className="about-grid">
        <div className="about-photo">
          <img src={FOUNDER_PHOTO} alt="Founder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div className="about-content">
          <h2 className="about-quote">
            Four decades of formulating.
            <br />
            One unwavering belief:
            <br />
            <span className="hl">Ayurveda works.</span>
          </h2>
          <p className="about-text">
            NatureExpert Ayurvedic Pvt. Ltd. was built on a foundation that most manufacturers
            don't have — a formulator who has spent 40+ years studying, testing, and refining
            Ayurvedic ingredients. Not as a trend, but as a science.
          </p>
          <p className="about-text">
            Today, we are a fully licensed, full-stack Ayurvedic manufacturer serving brands
            across skincare, haircare, and body care. Our Ministry of Ayush license isn't just a
            certificate on the wall — it's proof that our processes, ingredients, and
            formulations meet the highest standards set by the Indian government for Ayurvedic
            products.
          </p>
          <p className="about-text">
            If you're building a brand that wants to stand for something real, we're the
            manufacturing partner that makes that possible.
          </p>
          <div className="about-badges">
            <span className="badge green">Ministry of Ayush</span>
            <span className="badge green">ISO Certified</span>
            <span className="badge">Skincare</span>
            <span className="badge">Haircare</span>
            <span className="badge">Body Care</span>
            <span className="badge">Contract Mfg</span>
            <span className="badge">Private Label</span>
          </div>
        </div>
      </div>
    </section>
  );
}
