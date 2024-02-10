import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '/assets/images/logo.webp'

import './info-section.scss'

export default function InfoSection() {
  return (
    <section id="info" className="info_section ">
      <div className="container-sm">
        <div className="info_top">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 py-3 py-md-0">
              <Link className="logo-container navbar-brand mx-auto mx-md-0" href="/" prefetch={true}>
                <Image src={Logo} alt="Superfood Miracle Tree" fill style={{ objectFit: 'contain' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
              </Link>
            </div>
            <div className="col-md-3 py-3 py-md-0 ">
              <div className="info_contact justify-content-center justify-content-md-start">
                <Link href="/contact" prefetch={true}>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0 ">
              <div className="social_box justify-content-center">
                <Link href="http://www.facebook.com" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link href="http://www.twitter.com" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link href="http://www.linkedin.com" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link href="http://www.instagram.com" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="info_bottom">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="info_detail">
                <h5>
                  Moringa Herbasina
                </h5>
                <p>
                  We produce, manage and deliver Moringa products for local and export markets.
                  <br />We are committed to deliver the best quality Moringa products to our customers.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_detail">
                <h5>
                  Services
                </h5>
                <p>
                  We are confidence to meet the broad market, from tea-bag until container.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="">
                <h5>
                  Useful links
                </h5>
                <ul className="info_menu">
                  <li>
                    <Link href="/products" prefetch={true}>
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" prefetch={true}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/achievements" prefetch={true}>
                      Achievements
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
