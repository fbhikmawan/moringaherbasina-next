import React from "react";

import Achievement from "../components/Achievement";

import Certification from "/assets/images/certification.webp";
import Community from "/public/assets/images//activities/dharma-wanita/dharma-wanita-2.webp";
import Innovation from "/assets/images/innovation.webp";
import CSR from "/public/assets/images/activities/smkn-ngasem/smkn-ngasem-2.webp";

import "./achievement-section.scss";

export default function AchievementSection({ layoutPadding }) {
  const achievements = [
    { image: Certification, name: "Certifications", resume: "Achieved certifications for our Moringa farms,<br class='pc-only'/> ensuring the highest quality products." },
    { image: Community, name: "Community Outreach", resume: "Initiated a community outreach program to educate<br class='pc-only'/> about sustainable business practices." },
    { image: Innovation, name: "Product Innovation", resume: "Launched a new line of Moringa-based health supplements,<br class='pc-only'/> expanding our product range." },
    { image: CSR, name: "Company Social Responsibility", resume: "Contributes to the economic and education growth<br class='pc-only'/> through our business practices." },,
  ];
  const paddingClass = layoutPadding ? "layout_padding" : "";

  return (
    <section id="achievements" className={`achievement_section ${paddingClass}`}>
      <div className="container-sm">
        <div className="heading_container heading_center">
          <h2>Our Achievements</h2>
          <p>
            We're proud of the work we've done and the milestones we've achieved. <br className="dn-sp" />
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
  );
}
