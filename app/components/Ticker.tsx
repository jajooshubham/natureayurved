import { Fragment } from "react";

const ITEMS = [
  "Ministry of Ayush Licensed",
  "40+ Years Formulation Expertise",
  "ISO Certified Manufacturing",
  "Skincare · Haircare · Body Care",
  "100% Ayurvedic Formulations",
  "Contract Manufacturing",
  "Private Label Ready",
];

// Duplicated so the track can loop seamlessly at -50% translateX.
const TRACK = [...ITEMS, ...ITEMS];

export function Ticker() {
  return (
    <div className="ticker-wrap" style={{ marginTop: 64 }}>
      <div className="ticker-track">
        {TRACK.map((item, i) => (
          <Fragment key={i}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-item ticker-dot">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
