'use client'

import React, { useState } from 'react';
import Link from 'next/link'

import ButtonProductCTA from '@/components/ButtonProductCTA';

import { Carousel } from 'react-bootstrap';

import './slider-section.scss'

export default function SliderSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
    <section className="slider_section position-relative">
      <div className="container-fluid">
        <Carousel wrap={true} controls={true} slide={true} indicators={false} interval={2000} prevIcon={prevIcon} nextIcon={nextIcon} onSelect={handleSelect} activeIndex={index} >
          <Carousel.Item>
            <div className="row">
              <div className="col">
                <div className="detail-box">
                  <div>
                    <h2>
                      Welcome to
                    </h2>
                    <h1>
                      Moringa Herbasina
                    </h1>
                    <p>
                      We produce, manage and deliver Moringa products<br/>for local and export markets.
                    </p>
                    <div>
                      <ButtonProductCTA>
                        Contact us
                      </ButtonProductCTA>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
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
                    <div>
                      <ButtonProductCTA>
                        Contact us
                      </ButtonProductCTA>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
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
                    <div>
                      <ButtonProductCTA>
                        Contact us
                      </ButtonProductCTA>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <ol className="carousel-indicators">
          <li className={index === 0 ? 'active' : ''} onClick={() => setIndex(0)}></li>
          <li className={index === 1 ? 'active' : ''} onClick={() => setIndex(1)}></li>
          <li className={index === 2 ? 'active' : ''} onClick={() => setIndex(2)}></li>
        </ol>
      </div>
    </section>
  )
}
