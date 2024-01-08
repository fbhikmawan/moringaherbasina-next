'use client'

import React from 'react'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import s1 from '/assets/images/powder.jpg'
import s2 from '/assets/images/tea-bag.jpg'
import s3 from '/assets/images/leaves.jpg'

export default function ProductCarousel({ isTopPage }) {
  const services = [
    { image: s1, title: "Moringa Powder", description: " Moringa powder is rich in vitamins, minerals, and amino acids. It can be used in a variety of ways such as in smoothies, soups, and tea." },
    { image: s2, title: "Moringa Tea", description: "Made from dried Moringa leaves. It is a refreshing beverage that is also packed with antioxidants and anti-inflammatory compounds." },
    { image: s3, title: "Moringa Leaves", description: "Derived from the seeds of the Moringa tree. It's often used in skincare products due to its moisturizing and anti-aging properties." },
  ]

  const carouselOptions = {
    swipeable: true,
    draggable: true,
    showDots: true,
    ssr: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    transitionDuration: 600,
    arrows: false,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
    responsive: {
      desktop: {
        breakpoint: { max: 9999, min: 992 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
    }
  }

  const renderSliderLayout = () => {
    return (
      <Carousel {...carouselOptions}>
        {services.map((service, index) => (
          <div className="item" key={index}>
            <div className="box ">
              <div className="img-box">
                <Image src={service.image} alt={service.title} placeholder="blur" />
              </div>
              <div className="detail-box">
                <h5>
                  {service.title}
                </h5>
                <p>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };

  const renderBreakdownLayout = () => {
    return (
      <ul>
        {services.map((service, index) => (
          <li className="item" key={index}>
            <div className="box ">
              <div className="img-box">
                <Image src={service.image} alt={service.title} placeholder="blur" />
              </div>
              <div className="detail-box">
                <h5>
                  {service.title}
                </h5>
                <p>
                  {service.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="carousel-wrap ">
      {isTopPage ? renderSliderLayout() : renderBreakdownLayout()}
    </div>
  )
}
