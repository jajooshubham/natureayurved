import { useFetcher } from "react-router";

type ContactActionResult = { ok: true } | { ok: false; error: string };

export function Contact() {
  const fetcher = useFetcher<ContactActionResult>();
  const isSubmitting = fetcher.state !== "idle";
  const result = fetcher.data;
  const submitted = result?.ok === true;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-heading">
            Let's build
            <br />
            your product.
          </h2>
          <p className="section-body" style={{ marginTop: 16 }}>
            Whether you have a full brief or just a concept, we're ready to talk. Drop us a
            message and our team will respond within 24 hours.
          </p>

          <div className="contact-detail">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Pune, Maharashtra, India</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">info@natureexpertayurvedic.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 11.13 19.79 19.79 0 011.5 2.5 2 2 0 013.48.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 XXXXX XXXXX</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="form-success">✓ Message sent! We'll get back to you within 24 hours.</div>
          ) : (
            <fetcher.Form method="post" action="/contact" className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="firstName" placeholder="Rajan" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lastName" placeholder="Mehta" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="rajan@yourbrand.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Brand Name</label>
                <input type="text" id="company" name="company" placeholder="Your Brand Pvt. Ltd." />
              </div>

              <div className="form-group">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" name="interest" defaultValue="">
                  <option value="">Select a service</option>
                  <option>Contract Manufacturing</option>
                  <option>Private Label</option>
                  <option>Custom Formulation R&D</option>
                  <option>Full Brand Build (Formulation + Manufacturing)</option>
                  <option>Just exploring — tell me more</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your product idea, category, target quantities, and any specific requirements..."
                />
              </div>

              {result?.ok === false && <div className="form-error">{result.error}</div>}

              <div className="form-submit">
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {isSubmitting ? "Sending…" : "Send Message →"}
                </button>
              </div>
            </fetcher.Form>
          )}
        </div>
      </div>
    </section>
  );
}
