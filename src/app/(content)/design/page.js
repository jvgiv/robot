import React from "react";
import Image from "next/image";
import styles from "./design.module.css";

const steps = [
  { title: "Define", desc: "Defined challenges, requirements, and constraints" },
  { title: "Brainstorm", desc: "Sketched, discussed, and analyzed each member's ideas" },
  { title: "Test & Evaluate", desc: "Evaluated through a series of tests and collected data based on performance" },
  { title: "Build", desc: "Built, 3D printed, and CNC'd our parts" },
  { title: "Re-Design", desc: "Used data and shortcomings to reiterate and improve" },
];

const iterations = [
  {
    version: "Version 1",
    period: "December — Qualifier 1",
    strengths: ["Very fast through take feeding"],
    weaknesses: ["Rigid intake", "Rigid launcher", "No auto"],
  },
  {
    version: "Version 2",
    period: "February — State Championship",
    strengths: ["Compliant intake", "Automated turret", "9 artifact auto"],
    weaknesses: ["Poor launch accuracy", "Large, bulky chassis", "Cannot intake artifacts from the side"],
  },
  {
    version: "Version 3",
    period: "April — World Championship",
    strengths: ["Slim, custom chassis", "Vectored intake", "Improved accuracy through Limelight"],
    weaknesses: ["Difficult wiring"],
  },
];

export default function Design() {
  return (
    <>
      <div className="section">
        <div className="two-col reveal">
          <div>
            <div className="section-tag">Process</div>
            <h2>
              Our Design
              <br />
              Process.
            </h2>
            <ol
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginTop: "1.5rem",
              }}
            >
              {steps.map((step, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.85rem 1.2rem",
                    background: "rgba(10,12,16,0.55)",
                    border: "1px solid rgba(200,205,214,0.1)",
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  <span
                    style={{
                      color: "var(--electric)",
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                      minWidth: "1.25rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div
                      style={{
                        color: "var(--paper)",
                        fontSize: "0.85rem",
                        fontFamily: "'Exo 2', sans-serif",
                        fontWeight: 600,
                        marginBottom: "0.15rem",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        color: "var(--titanium)",
                        fontSize: "0.8rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="image-frame" style={{ position: "relative" }}>
            <Image
              src="/robot/cad.png"
              alt="CAD Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="reveal">
          <div className="section-tag">Iterations</div>
          <h2>
            Robot
            <br />
            Versions.
          </h2>
          <div className={styles.iterationsGrid}>
            {iterations.map((iter, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "rgba(10,12,16,0.55)",
                  border: "1px solid rgba(200,205,214,0.1)",
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "var(--electric)",
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {iter.version}
                  </div>
                  <div
                    style={{
                      color: "rgba(200,205,214,0.4)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {iter.period}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      color: "var(--paper)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Strengths
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {iter.strengths.map((s, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", color: "var(--titanium)", lineHeight: "1.4" }}>
                        <span style={{ color: "var(--electric)", flexShrink: 0 }}>▸</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div
                    style={{
                      color: "var(--paper)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Weaknesses
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {iter.weaknesses.map((w, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem", color: "var(--titanium)", lineHeight: "1.4" }}>
                        <span style={{ color: "var(--fire)", flexShrink: 0 }}>▸</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="two-col reverse reveal">
          <div className="image-frame" style={{ position: "relative" }}>
            <Image
              src="/robot/rob.jpg"
              alt="Robot"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="section-tag">The Result</div>
            <h2>
              Built to
              <br />
              compete.
            </h2>
            <p>
              Three iterations, countless hours, and one goal — a robot capable
              of competing on the world stage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
