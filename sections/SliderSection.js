'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'

export default function SliderSection() {
  const navigateCarousel = useCallback((direction) => {
    const carouselElement = $('#carouselExampleIndicators');
    if (carouselElement.length > 0) {
      if (direction === 'prev') {
        carouselElement.carousel('prev');
      } else if (direction === 'next') {
        carouselElement.carousel('next');
      }
    }
  }, []);

  return (
    <section className=" slider_section position-relative">
      <div className="container">
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
                        welcome to
                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
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
                        welcome to

                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
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
                        welcome to
                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
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
          <a className="carousel-control-prev" onClick={() => navigateCarousel('prev')} role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a> 
          <a className="carousel-control-next" onClick={() => navigateCarousel('next')} role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a> 
        </div>
      </div>
    </section>
  )
}
