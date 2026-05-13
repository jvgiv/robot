import React from "react";

export default function WhySponsor() {
  return (
    <div className="section">
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
          <img
            src="https://lh3.googleusercontent.com/sitesv/AA5AbUCHft-zIs1DHK5EHv954YY6d8YsCBI6kEM6OFyvhSpbAio-k-Ltsdrb8-hbS8w89msmzL0nIeb5dQIGHe9PRqnv_BN8Q1UrPwdq3-K41HY6chPRQw2sMTWKSMQO5TnCzhO0nYYBe1B4Nj5Pr9fz1Jk2IeUeuFEPlQ-1RVJPgBvfrTJkoVSAkMhMXxneRcYxj4QmPznq4liTuy-EgtlAXy1rpJfHLlPljeRNOX0=w1280"
            alt="Robo Titans team in action"
            // onError="this.style.background='#1c2030';this.style.display='block'"
          />
        </div>
      </div>
    </div>
  );
}
