import React from "react";
import Image from "next/image";

const tiers = [
  {
    amount: "$250+",
    perks: "Business logo on team shirts and website",
  },
  {
    amount: "$500+",
    perks: "Business logo on robot, team shirts, and website",
  },
  {
    amount: "Material $300+",
    perks: "Material donation — logo on robot, team shirts, and website",
  },
];

export default function Sponsorship() {
  return (
    <>
      <div className="section">
        <div className="two-col reveal">
          <div>
            <div className="section-tag">Sponsorship</div>
            <h2>
              Help us get
              <br />
              to Worlds.
            </h2>
            <p>
              For the first time in Robo Titans history, we have earned the
              opportunity to travel to Worlds in Houston, Texas and compete
              against the best teams on the planet. Your support makes it
              possible.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Beyond building our robot, we spend our time collaborating with
              community members to spark passion in robotics and engineering in
              students of all ages through our robotics club.
            </p>
          </div>
          <div className="image-frame" style={{ position: "relative" }}>
            <Image
              src="/sponsorshipimg/img1.jpg"
              alt="Robo Titans Sponsorship"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="two-col reverse reveal">
          <div className="image-frame" style={{ position: "relative" }}>
            <Image
              src="/teampic.JPG"
              alt="Robo Titans at competition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="section-tag">Our Goals</div>
            <h2>
              Here to make
              <br />a lasting mark.
            </h2>
            <p>
              In only four years we have built a powerful, dominant record in
              competitions — and we&apos;re just getting started. Your brand
              will be seen on our robot, jerseys, and website, advertised both
              locally and nationwide at every event we attend.
            </p>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="reveal">
          <div className="section-tag">Partnership Tiers</div>
          <h2>
            Sponsor
            <br />
            the team.
          </h2>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              marginTop: "1.5rem",
              maxWidth: "560px",
            }}
          >
            {tiers.map((tier, i) => (
              <li
                key={i}
                style={{
                  background: "rgba(10,12,16,0.55)",
                  border: "1px solid rgba(200,205,214,0.1)",
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  transition: "border-color 0.2s",
                }}
              >
                <a
                  href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      color: "var(--electric)",
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                      minWidth: "110px",
                    }}
                  >
                    {tier.amount}
                  </span>
                  <span
                    style={{
                      color: "var(--titanium)",
                      fontSize: "0.85rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {tier.perks}
                  </span>
                  <span
                    style={{
                      color: "var(--electric)",
                      marginLeft: "auto",
                      flexShrink: 0,
                    }}
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="reveal">
          <div className="section-tag">Can&apos;t Sponsor?</div>
          <h2>
            Every dollar
            <br />
            counts.
          </h2>
          <p style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            A donation of any size goes directly toward helping us compete at
            the World Championship.
          </p>
          <a
            href="https://www.gofundme.com/f/help-robotitans-compete-in-world-championship"
            target="_blank"
            className="btn btn-primary"
          >
            Donate on GoFundMe ↗
          </a>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <p style={{ fontSize: "0.85rem", color: "var(--titanium)" }}>
              <span style={{ color: "var(--electric)" }}>Venmo</span> —
              @toll-gate-robotics
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--titanium)" }}>
              <span style={{ color: "var(--electric)" }}>Check</span> — Payable
              to &quot;Toll Gate Robotics&quot;, send to Toll Gate High School,
              575 Centreville Road, Warwick, RI 02886
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
