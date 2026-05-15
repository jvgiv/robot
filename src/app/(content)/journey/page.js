import React from "react";

const awards = [
  "3× Control Award",
  "2× RI State Championship Tournament-Winning Alliance",
  "RI State Championship Finalist Alliance",
  "Winning Alliance — RI FTC Qualifier 2024",
  "Finalist Alliance — RI FTC Qualifier 2025",
];

export default function Journey() {
  return (
    <>
      <section className="section">
        <div className="reveal">
          <div className="section-tag">Our Story</div>
          <h2>
            Four years.
            <br />
            One mission.
          </h2>
          <p>
            The Robo Titans are a dedicated team of students and mentors from
            Warwick, Rhode Island — now in our 4th year competing in the FTC
            tournament and headed to worlds for the first time. We work hard to
            continually improve our abilities and our robot, and we have the
            hardware to prove it.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: "3rem" }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "600px" }}>
            {awards.map((award, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.8rem",
                  color: "var(--titanium)",
                  padding: "0.85rem 1.2rem",
                  background: "rgba(10,12,16,0.55)",
                  border: "1px solid rgba(200,205,214,0.1)",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ color: "var(--electric)", flexShrink: 0 }}>▸</span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="two-col reveal">
          <div>
            <div className="section-tag">Looking Ahead</div>
            <h2>
              Building the
              <br />
              next generation.
            </h2>
            <p>
              With a team made up mostly of seniors, we&apos;ve invested heavily in
              recruiting new members and closing skill gaps. We taught members
              how to use the CNC machine, draft models in CAD, and manage a team
              financially, mechanically, and technologically — so the Titans live
              on long after we graduate.
            </p>
          </div>
          <div className="image-frame" style={{ aspectRatio: "auto", overflow: "visible" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/flyer.png"
              alt="Robo Titans Flyer"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
