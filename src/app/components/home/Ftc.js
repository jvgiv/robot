import React from "react";
import Image from "next/image";

export default function Ftc() {
  return (
    <div id='record' className="section" style={{ paddingTop: 0 }}>
      <div className="two-col reverse reveal">
        <div className="image-frame" style={{ position: "relative" }}>
          <Image
            src="/richamps.jpg"
            alt="Robo Titans Team"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="section-tag">Team Building</div>
          <h2>
            FTC
            <br />
            Comes
            <br />
            First
          </h2>
          <p>
            {/* In only four years, Robo Titans has built a powerful, competitive
            record. We are here — and we aren't going anywhere. */}
              The First Tech Challenge (FTC) core values are the fundamental
        principals guiding participants - focusing on friendly sportsmanship,
        respect, teamwork, and learning. The six core values are:
      
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
            {["Discovery", "Innovation", "Impact", "Inclusion", "Teamwork", "Fun"].map((val) => (
              <li key={val} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "var(--titanium)", padding: "0.6rem 1rem", background: "rgba(10,12,16,0.55)", border: "1px solid rgba(200,205,214,0.1)", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                <span style={{ color: "var(--electric)", flexShrink: 0 }}>▸</span>
                {val}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Together, these values foster a culture of equity and community.
            {/* Your logo will appear on our website, team jerseys, and robot —
            advertised both locally and nationwide at every competition we
            attend. */}
          </p>
        </div>
      </div>
    </div>
  );
}
