import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  return {
    title: `Reach Us | ${previousTitle}`,
    description: `Jl. Waduk Sonorejo, Dusun Budengan. RT. 08 Rw. 03 Kec. Padangan. Kabupaten Bojonegoro, Jawa Timur, Indonesia`,
    openGraph: {
      images: [
        {
          url: '/assets/images/og-logo.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function ContactUsPage() {
  return (
    <section id="contact" class="layout_padding">
      <div className="container-sm mx-auto">
        <div className="heading_container">
          <h2>
            Our Store Location
          </h2>
          <h3>Herbasina Nutrindo</h3>
        </div>
        <div className="map-responsive">
          {/* Replace the src attribute with the link to your Google Maps location */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6643992210311!2d111.6257609141578!3d-7.165523049342936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7763317c7e8dfd%3A0x29740e9df387f486!2sHerbasina%20Nutrindo!5e0!3m2!1sen!2sid!4v1709603230583!5m2!1sen!2sid" width="1200" height="450" style={{ border:0, width:'100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
        </div>
        <div className="address-details" style={{ marginTop:30 }}>
          {/* Replace with your store's address details */}
          <p>Jl. Waduk Sonorejo, Dusun Budengan </p>
          <p>RT. 08 Rw. 03 Kec. Padangan</p>
          <p>Kabupaten Bojonegoro, Jawa Timur, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
