import React from "react";

export default function Tiers() {
  return (
    <div id='tiers' className="tiers-section">
      <div className="tiers-inner">
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1rem" }}
        >
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Sponsorship Tiers
          </div>
          <h2>
            Choose Your
            <br />
            Impact Level
          </h2>
          <p style={{ maxWidth: "none" }}>
            Every tier gets your brand in front of regional and national
            audiences as we compete at the highest level of FTC robotics.
          </p>
        </div>
        <div className="tiers-grid reveal">
          {/* <!-- Silver --> */}
          <div className="tier-card silver">
            <div className="tier-badge">Silver Tier</div>
            <div className="tier-price">$250</div>
            <div className="tier-price-sub">and above</div>
            <ul className="tier-perks">
              <li>Business logo on team shirts</li>
              <li>Business logo on team website</li>
              <li>Recognition in competition programs</li>
            </ul>
            <a
              href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
              target="_blank"
              className="btn btn-outline"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Become a Sponsor
            </a>
          </div>

          {/* <!-- Gold --> */}
          <div className="tier-card gold">
            <div className="tier-badge">⭐ Gold Tier</div>
            <div className="tier-price">$500</div>
            <div className="tier-price-sub">and above — most popular</div>
            <ul className="tier-perks">
              <li>Business logo on the robot itself</li>
              <li>Business logo on team shirts</li>
              <li>Business logo on team website</li>
              <li>National visibility at World Championship</li>
            </ul>
            <a
              href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
              target="_blank"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Become a Sponsor
            </a>
          </div>

          {/* <!-- Material --> */}
          <div className="tier-card material">
            <div className="tier-badge">Material Donor</div>
            <div className="tier-price">$300</div>
            <div className="tier-price-sub">value in materials</div>
            <ul className="tier-perks">
              <li>Business logo on the robot</li>
              <li>Business logo on team shirts</li>
              <li>Business logo on team website</li>
              <li>Direct contribution to build quality</li>
            </ul>
            <a
              href="mailto:tollgaterobotics@example.com"
              className="btn btn-outline"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
