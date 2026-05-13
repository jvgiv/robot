import React from "react";

const features = [
  "Prioritizes speed over accuracy to score more points",
  "Sports defensive panels for protection",
  "Utilizes turret tracking to keep shots on target",
  "Features a rotating turret for accurate shots from any angle",
  "Includes custom 3D printed parts made by students",
];

export default function Robot() {
  return (
    <>
      <div className="section">
        <div className="two-col reveal">
          <div className="image-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/robot/ourrobot.png" alt="Our Robot" />
          </div>
          <div>
            <div className="section-tag">Our Robot</div>
            <h2>
              Speed and
              <br />
              Strength.
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1.5rem" }}>
              {features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.85rem",
                    color: "var(--titanium)",
                    padding: "0.75rem 1rem",
                    background: "rgba(10,12,16,0.55)",
                    border: "1px solid rgba(200,205,214,0.1)",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ color: "var(--electric)", flexShrink: 0, marginTop: "0.1em" }}>▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="two-col reverse reveal">
          <div className="image-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/robot/cadrobot.png" alt="3D CAD Rendering" />
          </div>
          <div>
            <div className="section-tag">Software</div>
            <h2>
              Intuitive
              <br />
              Coding.
            </h2>
            <p>
              We use an odometry system and Limelight camera to help our robot
              track its position in both autonomous and teleop phases. This
              keeps it on course and lets us dynamically adjust shot power for
              better scoring.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
