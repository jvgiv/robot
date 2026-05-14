import React from "react";
import Image from "next/image";

export default function Record() {
  return (
    <div id='record' className="section" style={{ paddingTop: 0 }}>
      <div className="two-col reverse reveal">
        <div className="image-frame" style={{ position: "relative" }}>
          <Image
            src="/robot/robot.jpg"
            alt="Robo Titans robot"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="section-tag">Our Record</div>
          <h2>
            Dominant.
            <br />
            Growing.
            <br />
            Unstoppable.
          </h2>
          <p>
            In only four years, Robo Titans has built a powerful, competitive
            record. We are here — and we aren't going anywhere.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Your logo will appear on our website, team jerseys, and robot —
            advertised both locally and nationwide at every competition we
            attend.
          </p>
        </div>
      </div>
    </div>
  );
}
