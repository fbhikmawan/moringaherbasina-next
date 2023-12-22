import React from 'react'
import Image from 'next/image'

import s1 from '/assets/images/s1.png'
import s4 from '/assets/images/s4.png'
import s6 from '/assets/images/s6.png'

export default function ServiceCarousel() {
  const services = [
    { image: s1, title: "Home Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { image: s4, title: "Machine Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { image: s6, title: "Car Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { image: s1, title: "Home Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { image: s4, title: "Machine Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { image: s6, title: "Car Welding", description: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  ]

  return (
    <div className="carousel-wrap ">
      <div className="service_owl-carousel owl-carousel">
      {services.map((service, index) => (
        <div className="item" key={index}>
          <div className="box ">
            <div className="img-box">
              <Image src={service.image} alt={service.title} placeholder="blur" />
            </div>
            <div className="detail-box">
              <h5>
                {service.title}
              </h5>
              <p>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
