import React from 'react'

import PhotoGallery from "/components/PhotoGallery";
import ImageModalLightbox from "/components/ImageModalLightbox";


export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || '';

  return {
    title: `Achievements | ${previousTitle}`,
    description: `We're proud of the work we've done and the milestones we've achieved.`,
  }
}

export default function AchievementsPage() {
  const actDharmaWanita = [
    { url: 'assets/images/activities/dharma-wanita/dharma-wanita-1.webp', description: 'Kunjungan Dharma Wanita' },
    { url: 'assets/images/activities/dharma-wanita/dharma-wanita-2.webp', description: 'Kunjungan Dharma Wanita' },
    { url: 'assets/images/activities/dharma-wanita/dharma-wanita-3.webp', description: 'Kunjungan Dharma Wanita' },
    { url: 'assets/images/activities/dharma-wanita/dharma-wanita-4.webp', description: 'Kunjungan Dharma Wanita' }
  ];
  const actDisperinaker = [
    { url: 'assets/images/activities/disperinaker/disperinaker-1.webp', description: 'Kunjungan Disperinaker' },
    { url: 'assets/images/activities/disperinaker/disperinaker-2.webp', description: 'Kunjungan Disperinaker' },
    { url: 'assets/images/activities/disperinaker/disperinaker-3.webp', description: 'Kunjungan Disperinaker' },
    { url: 'assets/images/activities/disperinaker/disperinaker-4.webp', description: 'Kunjungan Disperinaker' },
    { url: 'assets/images/activities/disperinaker/disperinaker-5.webp', description: 'Kunjungan Disperinaker' }
  ];
  const actSMKNngasem = [
    { url: 'assets/images/activities/smkn-ngasem/smkn-ngasem-1.webp', description: 'Kunjungan SMKN Ngasem' },
    { url: 'assets/images/activities/smkn-ngasem/smkn-ngasem-2.webp', description: 'Kunjungan SMKN Ngasem' },
    { url: 'assets/images/activities/smkn-ngasem/smkn-ngasem-3.webp', description: 'Kunjungan SMKN Ngasem' },
    { url: 'assets/images/activities/smkn-ngasem/smkn-ngasem-4.webp', description: 'Kunjungan SMKN Ngasem' }
  ];
  const workshops = [
    { url: '/assets/images/workshops/workshop-pbp.webp', description: 'Workshop  1' },
    { url: '/assets/images/workshops/workshop-penyuluhan-pirt.webp', description: 'Workshop  2' },
    { url: '/assets/images/workshops/workshop-haccp.webp', description: 'Workshop  3' },
  ];
  const certifications = [
    { url: '/assets/images/certifications/certificate-halal.webp', description: 'Certificate  1' },
    { url: '/assets/images/certifications/certificate-merek.webp', description: 'Certificate  2' },
    { url: '/assets/images/certifications/certificate-nib.webp', description: 'Certificate  3' },
    { url: '/assets/images/certifications/certificate-pirt.webp', description: 'Certificate  4' },
  ];

  return (
    <section id="achievements" className={`achievement_section layout_padding`}>
      <div className="container-sm">
        <div className="heading_container heading_center">
          <h2>Our Certifications</h2>
        </div>
        <ImageModalLightbox objects={certifications} />
        <div className="heading_container heading_center">
          <h2>Our Activities</h2>
        </div>
        <div className="heading_container heading_center">
          <h3>Dharma Wanita</h3>
          <p>
            We're proud of the work we've done and the milestones we've achieved. <br />
            Here are some of our key achievements and activities.
          </p>
        </div>
        <div className="row">
          <PhotoGallery images={actDharmaWanita} />
        </div>
        <div className="heading_container heading_center">
          <h3>Disperinaker</h3>
          <p>
            We're proud of the work we've done and the milestones we've achieved. <br />
            Here are some of our key achievements and activities.
          </p>
        </div>
        <div className="row">
          <PhotoGallery images={actDisperinaker} />
        </div>
        <div className="heading_container heading_center">
          <h3>SMKN Ngasem</h3>
          <p>
            We're proud of the work we've done and the milestones we've achieved. <br />
            Here are some of our key achievements and activities.
          </p>
        </div>
        <div className="row">
          <PhotoGallery images={actSMKNngasem} />
        </div>
        <div className="heading_container heading_center">
          <h2>Our Workshop & Training</h2>
        </div>
        <ImageModalLightbox objects={workshops} />
      </div>
    </section>
  )
}
