import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/assets/images/logo.webp'

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
              <div className="social_box justify-content-center justify-content-lg-start">
                <Link href="https://www.tiktok.com/@herbasina_official" target="_blank" prefetch={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512" fill='#FFF'><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100063719635671" target="_blank" prefetch={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 320 512" fill='#FFF'><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                </Link>
                <Link href="https://www.instagram.com/herbasina_official/" target="_blank" prefetch={true}>
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
                  We produce, manage and deliver Moringa products for local and export markets.<br className="pc-only" /> We are committed to deliver the best quality Moringa products to our customers.
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
                  Links
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
