import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import aboutImage from '/assets/images/about-img.jpg'

export default function AboutSection({ layoutPadding }) {
  const paddingClass = layoutPadding ? "layout_padding" : '';

  return (
    <section id="about" className={`about_section ${paddingClass}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <div className="detail-box pr-md-2">
              <div className="heading_container">
                <h2 className="">
                  About Us
                </h2>
              </div>
              <p className="detail_p_mt">
                At Nurhadi, we are more than just a Moringa product provider - we are a team of dedicated professionals committed to bringing the best of Moringa to you. Our journey begins at the source, where we ensure the Moringa leaves are grown under optimal conditions, harvested at the right time, and processed with utmost care. </p>
              <p className="detail_p_mt">
                We believe in the power of Moringa and are dedicated to maintaining the highest standards in every step of our production process. From careful selection of raw materials to state-of-the-art processing techniques, from rigorous quality control to thoughtful packaging, we ensure that every product we deliver is of the highest quality.</p>
              <p className="detail_p_mt">
                Trust us to bring you the best of Moringa, and experience the difference that dedication and passion can make.</p>
              <Link href="/about" className="">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="img-box ">
              <Image src={aboutImage} className="box_img" alt="About Us" placeholder="blur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
