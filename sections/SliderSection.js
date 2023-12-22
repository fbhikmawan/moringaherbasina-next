import React from 'react'
import Link from 'next/link'

export default function SliderSection() {
  return (
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide <br />
                      Welding Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <Link href="/contact" className="btn1">
                        Contact Us
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide <br />
                      Welding Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <Link href="/contact" className="btn1">
                        Contact Us
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide <br />
                      Welding Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <Link href="/contact" className="btn1">
                        Contact Us
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <Link className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </Link> 
          <Link className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </Link> 
        </div>
      </div>
    </section>
  )
}
