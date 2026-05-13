import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    img: "/team/leadprotandfab.png",
    title: "Lead Prototyper and Fabricator",
  },
  {
    img: "/team/leadmach.png",
    title: "Lead Machinist and Operator",
  },
  {
    img: "/team/machandop.png",
    title: "Machinist and Operator",
  },
  {
    img: "/team/caddesign.png",
    title: "CAD Design Specialist",
  },
  {
    img: "/team/recorder.png",
    title: "Recorder",
  },
  {
    img: "/team/cnc.png",
    title: "CNC Specialist/Builder",
  },
  {
    img: "/team/designer.png",
    title: "Designer",
  },
  {
    img: "/team/scouter.png",
    title: "Scouter",
  },
  {
    img: "/team/progspec.png",
    title: "Programming Specialist",
  },
  {
    img: "/team/programmer.png",
    title: "Programmer",
  },
  {
    img: "/team/marketer.png",
    title: "Marketing Specialist",
  },
  {
    img: "/team/designer2.png",
    title: "Designer",
  },
];

export default function Team() {
  return (
    <section className="section team-section">
      <div>
        <div className="section-tag">Meet Our Team</div>
        <h2>Robo Titans — built by builders.</h2>
        <p>
          Our team is made up of fabricators, programmers, designers, and
          competitors who bring every season to life. From robot build nights to
          event strategy, we work together to make every match count.
        </p>
      </div>

      <div className="team-hero">
        <div className="team-lead-card reveal">
          <div className="team-photo-frame">
            <Image
              src="/team/arcoach.png"
              alt="Coach Adam Ricci"
              width={520}
              height={520}
              className="team-photo"
            />
          </div>
          <div className="team-lead-copy">
            <span className="team-label">Coach</span>
            <h3>Adam Ricci</h3>
            <p>
              Coach Adam leads the Robo Titans with vision, technical guidance,
              and a passion for helping the next generation of STEM leaders
              succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <article className="member-card" key={index}>
            <div className="member-photo-frame">
              <Image
                src={member.img}
                alt={member.title}
                width={320}
                height={320}
                className="member-photo"
              />
            </div>
            <p className="member-title">{member.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
