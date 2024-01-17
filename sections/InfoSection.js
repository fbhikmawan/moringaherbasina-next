import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function InfoSection() {
  return (
    <section id="info" className="info_section ">
      <div className="container ">
        <div className="info_top">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 ">
              <Link className="logo-container navbar-brand" href="/">
                <Image src="/assets/images/logo.webp" alt="Superfood Miracle Tree" fill style={{ objectFit: 'contain' }} />
              </Link>
            </div>
            <div className="col-md-3 ">
              <div className="info_contact">
                <Link href="/contact">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="social_box">
                <Link href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link href="">
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
                  Bo Moringa
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
                    <Link href="/products">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/achievements">
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
