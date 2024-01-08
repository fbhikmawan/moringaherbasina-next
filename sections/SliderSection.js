'use client'

import React from 'react'
import Link from 'next/link'

export default function SliderSection() {
  return (
    <section className=" slider_section position-relative">
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        Welcome to
                      </h2>
                      <h1>
                        Bo Moringa
                      </h1>
                      <p>
                        We produce, manage and deliver Moringa products<br/>for local and export markets.
                      </p>
                      <div className="">
                        <Link href="/contact">
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        Our Commitment
                      </h2>
                      <h1>
                        Quality Products
                      </h1>
                      <p>
                        We are committed to deliver the best quality<br/>Moringa products to our customers.
                      </p>
                      <div className="">
                        <Link href="/contact">
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        Ready for
                      </h2>
                      <h1>
                        The Broad Market
                      </h1>
                      <p>
                        We are confidence to meet the broad market,<br/>from tea-bag until container.
                      </p>
                      <div className="">
                        <Link href="/contact">
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" onClick={(e) => e.preventDefault()} role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a> 
          <a className="carousel-control-next" href="#carouselExampleIndicators" onClick={(e) => e.preventDefault()} role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a> 
        </div>
      </div>
    </section>
  )
}
