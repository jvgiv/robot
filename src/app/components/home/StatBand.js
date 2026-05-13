import React from "react";

export default function StatBand() {
  return (
    <div className="stats-strip reveal">
      <div className="stat-item">
        <span className="stat-num">4</span>
        <span className="stat-label">Years Competing</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">1st</span>
        <span className="stat-label">World Championship Qualifier</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">∞</span>
        <span className="stat-label">STEM Lives Impacted</span>
      </div>
    </div>
  );
}
