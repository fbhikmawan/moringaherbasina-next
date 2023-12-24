'use client'

import React from 'react'
import Image from 'next/image'

import clientImage from '/assets/images/client.jpg'

export default function TestimonialSection({ layoutPadding }) {
  const testimonials = [
    { image: clientImage, name: "Budi Santoso", testimonial: "The quality of Nurhadi's Moringa products is exceptional. I've seen a significant improvement in my health since I started using them." },
    { image: clientImage, name: "Siti Aminah", testimonial: "I love Nurhadi's Moringa Tea. It's refreshing and packed with nutrients. Highly recommended!" },
    { image: clientImage, name: "Agus Prakoso", testimonial: "Nurhadi's commitment to organic farming and sustainable practices is commendable. Their Moringa Oil is a staple in my skincare routine." },
    { image: clientImage, name: "Dewi Sartika", testimonial: "The Moringa Leaf Powder from Nurhadi is a game changer. It's easy to use and incredibly nutritious. I use it in my smoothies every day." },
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
                        <Image src={testimonial.image} alt="Client" placeholder="blur" />
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
