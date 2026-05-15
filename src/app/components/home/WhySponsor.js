import React from "react";
import Image from "next/image";

export default function WhySponsor() {
  return (
    <div id='why-sponsor' className="section">
      <div className="two-col reveal">
        <div>
          <div className="section-tag">Why Sponsor</div>
          <h2>
            Sponsors Fuel
            <br />
            STEM Innovation
          </h2>
          <p>
            For the first time in Robo Titans history, we have earned the
            opportunity to travel to Worlds and compete against the best teams
            on the planet.
          </p>
          <p style={{marginTop: '1rem'}}>
            Beyond building and programming our robot, we spend our time
            collaborating with community members to ignite passion for robotics
            and engineering in students of all ages through our robotics club.
          </p>
        </div>
        <div className="image-frame">
          <Image
            src="/robot/launcher.png"
            alt="Robo Titans Robot"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
