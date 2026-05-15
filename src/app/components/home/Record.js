import React from "react";
import Image from "next/image";

export default function Record() {
  return (
    <div id="record" style={{ background: "var(--mid)", borderTop: "1px solid rgba(200,205,214,0.08)", borderBottom: "1px solid rgba(200,205,214,0.08)" }}>
    <div className="section" style={{ paddingTop: "3rem" }}>
      <div className="two-col reverse reveal">
        
        <div>
          <div className="section-tag">Our Record</div>
          <h2>
            Determined.
            <br />
            Growing.
            <br />
            Innovative.
          </h2>
          <p>
            In only four years, Robo Titans has built a powerful, competitive
            record. We are here — and we aren&apos;t going anywhere.
          </p>
          <p style={{ marginTop: "1rem" }}>
            With the proper level of sponsorship, your logo will appear on our website, team jerseys, and robot —
            advertised both locally and nationwide at every competition we
            attend.
          </p>
        </div>
        <div className="image-frame" style={{ position: "relative" }}>
          <Image
            src="/logo.png"
            alt="Robo Titans robot"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
