'use client'

import React from 'react'
import Image from 'next/image'

import DeviWinda from '/assets/images/devi-winda.webp'
import RatihSetyoWardani from '/assets/images/ratih-setyo-wardani.webp'

export default function TestimonialSection({ layoutPadding }) {
  const testimonials = [
    { image: DeviWinda, name: "Devi Winda", testimonial: "Kapsul yang sangat berkhasiat sebagai suplemen sehari-hari. Vitaminnya lengkap, warna hijaunya alami. Pokoknya konsumsi kapsul kelor Superfood bikin tubuh sehat dan segar" },
    { image: RatihSetyoWardani, name: "Ratih Setyo Wardani", testimonial: "Benar benar Superfoods, banyak sekali kegunaannya" },
  ];
  const paddingClass = layoutPadding ? "layout_padding" : '';

  return (
    <section className={`testimonial_section ${paddingClass}`}>
      <div className="container ">
        <div className="heading_container heading_center">
          <h2>
            Testimonial
          </h2>
          <hr />
        </div>
        <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-lg-7 col-md-9 mx-auto">
                    <div className="testimonial_container ">
                      <div className="img-box">
                        <Image src={testimonial.image} alt="Client" fill style={{ objectFit: 'contain' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
                      </div>
                      <div className="detail-box">
                        <h5>
                          {testimonial.name}
                        </h5>
                        <p>
                          {testimonial.testimonial}
                        </p>
                        <span>
                          <i className="fa fa-quote-left" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev" onClick={(e) => e.preventDefault()}>
              <span>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next" onClick={(e) => e.preventDefault()}>
              <span>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
