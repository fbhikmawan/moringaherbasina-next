import React from "react";

import PhotoGallery from "/components/PhotoGallery";

import "./page.scss";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || "";

  return {
    title: `Achievements | ${previousTitle}`,
    description: `We're proud of the work we've done and the milestones we've achieved.`,
    openGraph: {
      images: ['/assets/images/og-logo.png'],
    },
  };
}

export default function AchievementsPage() {
  const actDharmaWanita = [
    { url: "assets/images/activities/dharma-wanita/dharma-wanita-1.webp", description: "Training for Dharma Wanita" },
    { url: "assets/images/activities/dharma-wanita/dharma-wanita-2.webp", description: "Training for Dharma Wanita" },
    { url: "assets/images/activities/dharma-wanita/dharma-wanita-3.webp", description: "Training for Dharma Wanita" },
    { url: "assets/images/activities/dharma-wanita/dharma-wanita-4.webp", description: "Training for Dharma Wanita" },
  ];
  const actDisperinaker = [
    { url: "assets/images/activities/disperinaker/disperinaker-1.webp", description: "Visit from Local Governance" },
    { url: "assets/images/activities/disperinaker/disperinaker-2.webp", description: "Visit from Local Governance" },
    { url: "assets/images/activities/disperinaker/disperinaker-3.webp", description: "Visit from Local Governance" },
    { url: "assets/images/activities/disperinaker/disperinaker-4.webp", description: "Visit from Local Governance" },
    { url: "assets/images/activities/disperinaker/disperinaker-5.webp", description: "Visit from Local Governance" },
  ];
  const actSMKNngasem = [
    { url: "assets/images/activities/smkn-ngasem/smkn-ngasem-1.webp", description: "SMKN Ngasem Internship Program" },
    { url: "assets/images/activities/smkn-ngasem/smkn-ngasem-2.webp", description: "SMKN Ngasem Internship Program" },
    { url: "assets/images/activities/smkn-ngasem/smkn-ngasem-3.webp", description: "SMKN Ngasem Internship Program" },
    { url: "assets/images/activities/smkn-ngasem/smkn-ngasem-4.webp", description: "SMKN Ngasem Internship Program" },
  ];
  const workshops = [
    { url: "/assets/images/workshops/workshop-pbp.webp", description: "Magang Budidaya dan Pengolahan Tanaman Kelor Moringa Organik Indonesia" },
    { url: "/assets/images/workshops/workshop-penyuluhan-pirt.webp", description: "Penyuluhan Keamanan Pangan" },
    { url: "/assets/images/workshops/workshop-haccp.webp", description: "Workshop Daring HACCP bagi IKM Minuman dan Bahan Penyegar" },
  ];
  const certifications = [
    { url: "/assets/images/certifications/certificate-halal.webp", description: "Certificate  1" },
    { url: "/assets/images/certifications/certificate-merek.webp", description: "Certificate  2" },
    { url: "/assets/images/certifications/certificate-nib.webp", description: "Certificate  3" },
    { url: "/assets/images/certifications/certificate-pirt.webp", description: "Certificate  4" },
  ];

  return (
    <section id="achievements" className={`achievement_section layout_padding`}>
      <div className="container-sm">
        <div className="heading_container heading_center">
          <h2>Our Certifications</h2>
          <p>
            We are proud our achievements and qualifications.
            <br className="pc-only" /> Our certifications demonstrate our commitment to excellence, quality and professionalism.
          </p>
        </div>
        <div class="certifications row">
          <div class="certification">
            <h4 class="certification-name">Sertifikat Halal</h4>
            <p class="certification-details">Issuer: Badan Penyelenggara Jaminan Produk Halal RI</p>
            <p class="certification-details">Regist Number: ID35110000145391021</p>
            <p class="certification-details">Date Issued: 19 November 2021</p>
          </div>
          <div class="certification">
            <h4 class="certification-name">Perizinan Berusaha Berbasis Risiko</h4>
            <p class="certification-details">Issuer: Badan Koordinasi Penanaman Modal RI</p>
            <p class="certification-details">Regist Number: 0220007410246</p>
            <p class="certification-details">Date Issued: 4 April 2020</p>
          </div>
          <div class="certification">
            <h4 class="certification-name">Sertifikat Produksi Pangan Industri Rumah Tangga (PIRT)</h4>
            <p class="certification-details">Issuer: Dinas Kesehatan RI</p>
            <p class="certification-details">Regist Number: 5133522011295-25</p>
            <p class="certification-details">Date Issued: 3 September 2020</p>
          </div>
          <div class="certification">
            <h4 class="certification-name">Sertifikat Merek</h4>
            <p class="certification-details">Issuer: KemenKumHAM RI</p>
            <p class="certification-details">Regist Number: IDM001019494</p>
            <p class="certification-details">Date Issued: 4 Oktober 2021</p>
          </div>
        </div>
        <div className="heading_container heading_center pt-4 pt-md-5">
          <h2>Our Activities</h2>
          <p>
            Take a look at some of the exciting and engaging activities.
            <br className="pc-only" /> Our activities reflect our passion, creativity and collaboration skills.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 my-3">
            <div className="heading_container heading_center">
              <h3>Dharma Wanita</h3>
              <p>
                Providing training for the Dharma Wanita Association<br className="pc-only"/> of SMKN Ngasem Bojonegoro
              </p>
            </div>
            <div className="row">
              <PhotoGallery images={actDharmaWanita} />
            </div>
          </div>
          <div className="col-md-6 my-3">
            <div className="heading_container heading_center">
              <h3>Disperinaker</h3>
              <p>
                Visit of Mrs. PJ REGENT of Bojonegoro with<br className="pc-only"/> Dinas Perindustrian dan Ketenagakerjaan Bojonegoro
              </p>
            </div>
            <div className="row">
              <PhotoGallery images={actDisperinaker} />
            </div>
          </div>
          <div className="col-md-6 my-3">
            <div className="heading_container heading_center">
              <h3>SMKN Ngasem Internship</h3>
              <p>
                Internship for<br className="pc-only" /> Sekolah Menengah Kejuruan Negeri - Ngasem
              </p>
            </div>
            <div className="row">
              <PhotoGallery images={actSMKNngasem} />
            </div>
          </div>
        </div>
        <div className="heading_container heading_center pt-4 pt-md-5">
          <h2>Our Workshop & Training</h2>
          <p>
            We never stop learning and improving ourselves.<br className="pc-only" /> Enhancing our knowledge and skills in Moringa leaf processing through continuous learning.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 my-3">
            <PhotoGallery images={workshops} />
          </div>
        </div>
      </div>
    </section>
  );
}
