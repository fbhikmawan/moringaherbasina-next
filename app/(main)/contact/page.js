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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.572107420103!2d111.61987728419624!3d-7.175358474341032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e776305871ac81d%3A0xea37c0d4854a321c!2sJl.%20Waduk%20Sonorejo%2C%20Kec.%20Padangan%2C%20Kabupaten%20Bojonegoro%2C%20Jawa%20Timur%2062162!5e0!3m2!1sen!2sid!4v1705923395714!5m2!1sen!2sid" width="1200" height="450" style={{ border:0, width:'100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </div>
      <div className="address-details" style={{ marginTop:30 }}>
        {/* Replace with your store's address details */}
        <p>Jl. Waduk Sonorejo, Dusun Budengan </p>
        <p>RT. 08 Rw. 03 Kec. Padangan</p>
        <p>Kabupaten Bojonegoro, Jawa Timur, Indonesia</p>
      </div>
    </div>
  );
}
