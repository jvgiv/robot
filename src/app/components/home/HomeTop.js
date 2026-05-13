import React from "react";

export default function HomeTop() {
  return (
    <section id="home" className="hero">
      <div>
        <div className="hero-eyebrow">FTC Robotics · Team #22156</div>
        <h1>
          <span className="line1">Sponsor</span>
          <span className="line2">The</span>
          <span className="line3">Robo Titans</span>
        </h1>
        <p className="hero-sub">
          We are the Toll Gate Robo Titans, an award-winning FTC Robotics Team
          from Warwick, Rhode Island. 
          <br />
          Help us achieve success at this
          year&apos;s World Championship in Houston, Texas — and join us in
          sparking a passion for STEM across the country.
        </p>
        <div className="hero-cta">
          <a
            href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
            target="_blank"
            className="btn btn-primary"
          >
            Donate Now ↗
          </a>
          <a
            href="https://drive.google.com/file/d/1YPhWvNXUeIanQ9ZkhAZHXmJwCadfhZ1R/view"
            target="_blank"
            className="btn btn-outline"
          >
            Sponsorship Packet
          </a>
        </div>
      </div>
    </section>
  );
}
