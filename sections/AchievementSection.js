import React from 'react'
import Link from 'next/link'

import Achievement from '../components/Achievement'

export default function AchievementSection({ layoutPadding }) {
  const achievements = [
    { image: '/assets/images/t1.jpg', name: "Organic Certification", resume: "Achieved organic certification for our Moringa farms, ensuring the highest quality products." },
    { image: '/assets/images/t2.jpg', name: "Community Outreach", resume: "Initiated a community outreach program to educate local farmers about sustainable farming practices." },
    { image: '/assets/images/t3.jpg', name: "Product Innovation", resume: "Launched a new line of Moringa-based health supplements, expanding our product range." },
    { image: '/assets/images/t3.jpg', name: "Sustainability Award", resume: "Received an award for our commitment to sustainable and environmentally friendly practices." },
  ];
  const paddingClass = layoutPadding ? "layout_padding" : '';

  return (
    <section id="achievements" className={`achievement_section ${paddingClass}`}>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our Achievements
          </h2>
          <p>
            We're proud of the work we've done and the milestones we've achieved. <br/>
            Here are some of our key achievements and activities.
          </p>
        </div>
        <div className="row">
          {achievements.map((achieve, index) => (
            <Achievement key={index} image={achieve.image} name={achieve.name} resume={achieve.resume} />
          ))}
        </div>
      </div>
    </section>
  )
}
