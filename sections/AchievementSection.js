import React from 'react'

import Achievement from '../components/Achievement'

import Organic from '/assets/images/organic.webp'
import Community from '/assets/images/community.webp'
import Innovation from '/assets/images/innovation.webp'
import Sustainability from '/assets/images/sustainability.webp'

import './achievement-section.scss'

export default function AchievementSection({ layoutPadding }) {
  const achievements = [
    { image: Organic, name: "Organic Certification", resume: "Achieved organic certification for our Moringa farms, ensuring the highest quality products." },
    { image: Community, name: "Community Outreach", resume: "Initiated a community outreach program to educate local farmers about sustainable farming practices." },
    { image: Innovation, name: "Product Innovation", resume: "Launched a new line of Moringa-based health supplements, expanding our product range." },
    { image: Sustainability, name: "Sustainability Award", resume: "Received an award for our commitment to sustainable and environmentally friendly practices." },
  ];
  const paddingClass = layoutPadding ? "layout_padding" : '';

  return (
    <section id="achievements" className={`achievement_section ${paddingClass}`}>
      <div className="container-sm">
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
