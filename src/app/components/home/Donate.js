import React from "react";

export default function Donate() {
  return (
    <div id="donate" className="donate-section">
      <div className="reveal">
        <div className="section-tag">Can't Sponsor?</div>
        <h2>
          Every Dollar
          <br />
          Moves the
          <br />
          Mission Forward
        </h2>
        <p>
          {/* All donations go directly to competition costs — entry fees, robot
          shipping, and team travel and lodging for Worlds in Houston. */}
          While donations are currently not being accepted, keep us in mind for
          the future! Check out our sponsorship tiers above to get an idea of
          how your support can make a difference.
        </p>

        <div className="donate-methods">
          {/* <div className="donate-method">
            <div className="donate-icon">🔗</div>
            <div>
              <div className="donate-method-label">GoFundMe</div>
              <div className="donate-method-detail">
                <a
                  href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
                  target="_blank"
                  style={{ color: "var(--electric)", textDecoration: "none" }}
                >
                  gofundme.com → Help RoboTitans Compete
                </a>
              </div>
            </div>
          </div> */}
          <div className="donate-method">
            <div className="donate-icon">💸</div>
            <div>
              <div className="donate-method-label">Venmo</div>
              <div className="donate-method-detail">@toll-gate-robotics</div>
            </div>
          </div>
          <div className="donate-method">
            <div className="donate-icon">✉️</div>
            <div>
              <div className="donate-method-label">Check</div>
              <div className="donate-method-detail">
                Make out to "Toll Gate Robotics"
                <br />
                Toll Gate High School
                <br />
                575 Centreville Road, Warwick, RI 02886
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="donate-visual reveal">
        <div className="terminal-box">
          <div className="terminal-bar">
            <div className="terminal-dot"></div>
            <div className="terminal-dot"></div>
            <div className="terminal-dot"></div>
          </div>
          <div className="terminal-line">
            <span className="prompt">$ </span>cat funding_breakdown.txt
          </div>
          <div className="terminal-line" style={{ marginTop: "0.8rem" }}>
            <span className="val">ENTRY FEES</span>{" "}
            <span className="comment">// FTC World Championship</span>
          </div>
          <div className="terminal-line">
            <span className="val">ROBOT SHIPPING</span>{" "}
            <span className="comment">// RI → Houston, TX</span>
          </div>
          <div className="terminal-line">
            <span className="val">TEAM TRAVEL</span>{" "}
            <span className="comment">// Flights + hotel</span>
          </div>
          <div className="terminal-line">
            <span className="val">BUILD MATERIALS</span>{" "}
            <span className="comment">// Parts + upgrades</span>
          </div>
          <div
            className="terminal-line"
            style={{ marginTop: "0.8rem", color: "rgba(200,205,214,0.4)" }}
          >
            ---
          </div>
          <div className="terminal-line" style={{ marginTop: "0.5rem" }}>
            <span className="prompt">$ </span>
            <span className="comment">// 100% goes to the mission.</span>{" "}
            <span className="cursor"></span>
          </div>
        </div>
        {/* <a
          href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
          target="_blank"
          className="btn btn-primary"
          style={{ justifyContent: "center" }}
        >
          Donate on GoFundMe ↗
        </a> */}
        <a
          href="https://drive.google.com/file/d/1YPhWvNXUeIanQ9ZkhAZHXmJwCadfhZ1R/view"
          target="_blank"
          className="btn btn-outline"
          style={{ justifyContent: "center" }}
        >
          Full Sponsorship Packet ↗
        </a>
      </div>
    </div>
  );
}
