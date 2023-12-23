import React from 'react'
import ServiceCarousel from '@/components/ServiceCarousel'
import Link from 'next/link'

export default function ServiceSection() {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center ">
          <h2 className="">
            Our Services
          </h2>
          <p className="col-lg-8 px-0">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          </p>
        </div>
        <div className="service_container">
          <ServiceCarousel />
        </div>
        <div className="btn-box">
          <Link href="/services">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
