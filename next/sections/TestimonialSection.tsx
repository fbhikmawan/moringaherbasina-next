'use client'

import React from 'react'
import Image from 'next/image'
import { type StaticImageData } from 'next/image'

import DeviWinda from '@/assets/images/devi-winda.webp'
import RatihSetyoWardani from '@/assets/images/ratih-setyo-wardani.webp'

import { Carousel } from 'react-bootstrap';

import './testimonial-section.scss'

type TestimonialSectionProps = {
  layoutPadding?: boolean;
}

export default function TestimonialSection({ layoutPadding }: TestimonialSectionProps) {
  type Testimonital = {
    image: StaticImageData;
    name: string;
    testimonial: string;
  }

  const testimonials: Testimonital[] = [
    { image: DeviWinda, name: "Devi Winda", testimonial: "Kapsul yang sangat berkhasiat sebagai suplemen sehari-hari. Vitaminnya lengkap, warna hijaunya alami. Pokoknya konsumsi kapsul kelor Superfood bikin tubuh sehat dan segar" },
    { image: RatihSetyoWardani, name: "Ratih Setyo Wardani", testimonial: "Benar benar Superfoods, banyak sekali kegunaannya" },
  ];
  const paddingClass = layoutPadding ? "layout_padding" : '';

  const prevIcon = (
    <>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
      <span className="sr-only">Previous</span>
    </>
  );

  const nextIcon = (
    <>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <span className="sr-only">Next</span>
    </>
  );

  return (
    <section className={`testimonial_section ${paddingClass}`}>
      <div className="container-sm">
        <div className="heading_container heading_center">
          <h2>
            Testimonial
          </h2>
          <hr />
        </div>
        <Carousel wrap={true} controls={true} slide={true} indicators={false} interval={2000} prevIcon={prevIcon} nextIcon={nextIcon}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} >
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
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
