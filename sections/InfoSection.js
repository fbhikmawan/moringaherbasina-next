import React from 'react'
import Link from 'next/link'

export default function InfoSection() {
  return (
    <section id="contact" className="info_section ">
      <div className="container">
        <div className="info_top">
          <div className="row">
            <div className="col-md-3 ">
              <Link className="navbar-brand" href="/">
                Logo
              </Link>
            </div>
            <div className="col-md-5 ">
              <div className="info_contact">
                <Link href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Location
                  </span>
                </Link>
                <Link href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>
                    +01 1234567890
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4 ">
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
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="info_detail">
                <h5>
                  Company Name
                </h5>
                <p>
                  Randomised words which don't look even slightly believable. If you are going to use a passage of
                  Lorem
                  Ipsum, you need to be sure
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info_form">
                <h5>
                  NEWSLETTER
                </h5>
                <form action="">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info_detail">
                <h5>
                  Services
                </h5>
                <p>
                  Randomised words which don't look even slightly believable. If you are going to use a passage of
                  Lorem
                  Ipsum, you need to be sure
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="">
                <h5>
                  Useful links
                </h5>
                <ul className="info_menu">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      Team
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link href="/contact">
                      Contact Us
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
