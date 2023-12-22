import React from 'react'

import TeamMember from '../components/TeamMember'

import t1 from '/assets/images/t1.jpg'
import t2 from '/assets/images/t2.jpg'
import t3 from '/assets/images/t3.jpg'

export default function TeamSection() {
  const teamMembers = [
    { image: t1, name: "Martin Anderson", role: "supervisor" },
    { image: t2, name: "Denny Butler", role: "supervisor" },
    { image: t3, name: "Nathan Mcpherson", role: "supervisor" },
  ];

  return (
    <section className="team_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
            iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} image={member.image} name={member.name} role={member.role} />
          ))}
        </div>
      </div>
    </section>
  )
}
