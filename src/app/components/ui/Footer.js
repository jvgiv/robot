import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-brand">
        ROBO<span>TITANS</span>{" "}
        <span
          style={{
            color: "rgba(200,205,214,0.3)",
            fontStyle: "italic",
            fontSize: "0.75rem",
          }}
        >
          FTC Robotics
        </span>
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com/tollgate_robo_team" target="_blank">
          Instagram ↗
        </a>
        <a
          href="https://drive.google.com/file/d/1YPhWvNXUeIanQ9ZkhAZHXmJwCadfhZ1R/view"
          target="_blank"
        >
          Sponsorship Packet ↗
        </a>
        <a
          href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
          target="_blank"
        >
          Donate ↗
        </a>
        <a href="mailto:tollgaterobotics@example.com">
          Contact Us ↗
        </a>
      </div>
      <div className="footer-copy">Toll Gate High School · Warwick, RI</div>
    </div>
  );
}
