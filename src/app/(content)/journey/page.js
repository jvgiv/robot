import React from "react";
import Image from "next/image";

export default function Journey() {
  return (
    <div>
      <h1>Meet the Robo Titans!</h1>
      <p>
        The Robo Titans are in our 4th year competing in the FTC tournament, and
        are headed to worlds for the first time! We are a dedicated team of
        students and mentors from Warwick, Rhode Island who care deeply about
        building the best robot we can, and having fun doing it! We work hard to
        continually improve our abilities and our robot and strive to keep
        getting better and better. In our first year, we were selected for the
        winning alliance and took home a state championship. In our second year,
        we won our qualifier and went on to become the number one seed at the
        state championship. We have accumulated several prestigious awards,
        including three Control Awards, a Rhode Island State Championship
        Finalist Alliance award, two Rhode Island State Championship
        Tournament-Winning Alliance awards, the Winning Alliance RI FTC
        Qualifier 2024, and the Finalist Alliance RI FTC Qualifier 2025.
      </p>
      <div>
      <h1>Looking Ahead</h1>
      <p>
        Due to the fact that our team is made up of mostly seniors, this year we
        have allocated a lot of time into recruiting new members and developing
        the skills of our younger members. As new members join the team, talents
        and skills of each member are duly noted to ensure that each member
        feels that they are seen. We also develop their skills in places where
        there are gaps in ability on the team. We taught our members how to use
        the CNC machine, draft models in CAD, and manage a team financially,
        mechanically and technologically.{" "}
      </p>
      <Image src="/flyer.png" alt="Robo Titans Flyer" width={800} height={600} />
      </div>
    </div>
  );
}
