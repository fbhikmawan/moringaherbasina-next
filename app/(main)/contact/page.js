import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  return {
    title: `Reach Us | ${previousTitle}`,
  }
}

export default function ContactUsPage() {
  return (
    <div className="container mx-auto layout_padding">
      <h1>Our Store Location</h1>
      <div className="map-responsive">
        {/* Replace the src attribute with the link to your Google Maps location */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50825.47862866222!2d111.85185208354169!3d-7.165299786089634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77813aaa4b03a5%3A0x1a40bef6dbccb9ce!2sAlun%20-%20Alun%20Bojonegoro!5e0!3m2!1sen!2sid!4v1705433254456!5m2!1sen!2sid" width="1200" height="450" style={{ border:0, width:'100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </div>
      <div className="address-details" style={{ marginTop:30 }}>
        {/* Replace with your store's address details */}
        <p>1234 Street Name, City, Country</p>
        <p>Open Hours: 9am - 5pm, Mon - Fri</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}
