import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection({ layoutPadding, isTopPage }) {
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
                At Bo Moringa, we are more than just a Moringa product provider - we are a team of dedicated professionals committed to bringing the best of Moringa to you. Our journey begins at the source, where we ensure the Moringa leaves are grown under optimal conditions, harvested at the right time, and processed with utmost care. </p>
              <p className="detail_p_mt">
                As a moringa producer in Bojonegoro, we want to provide the best moringa products to fulfill the nutrition of the Indonesian people. Starting from upstream to downstream, we apply quality standards for organic moringa cultivation and use the Nutrition Lock Drying Method. </p>
              <p className="detail_p_mt">
                Nutrition Lock Drying Method with controlled temperature and in a closed room so that the dried moringa leaves produced remain green, rich in nutrients and hygienic</p>
              <p className="detail_p_mt">
                Trust us to bring you the best of Moringa, and experience the difference that dedication and passion can make.</p>
                
              {isTopPage && (
                <Link href="/about" className="">
                  Read More
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <div className="img-box ">
              <Image src="/assets/images/about-us.webp" className="box_img" alt="About Us" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
