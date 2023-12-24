'use client'

import React from 'react'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import s1 from '/assets/images/s1.png'
import s2 from '/assets/images/s2.png'
import s3 from '/assets/images/s3.png'
import s4 from '/assets/images/s4.png'
import s5 from '/assets/images/s5.png'
import s6 from '/assets/images/s6.png'

export default function ProductCarousel() {
  const services = [
    { image: s1, title: "Moringa Leaf Powder", description: " Moringa leaf powder is rich in vitamins, minerals, and amino acids. It can be used in a variety of ways such as in smoothies, soups, and tea." },
    { image: s2, title: "Moringa Tea", description: "Made from dried Moringa leaves. It is a refreshing beverage that is also packed with antioxidants and anti-inflammatory compounds." },
    { image: s3, title: "Moringa Oil", description: "Derived from the seeds of the Moringa tree. It's often used in skincare products due to its moisturizing and anti-aging properties." },
    { image: s4, title: "Moringa Seeds", description: "Numerous applications in food, cosmetics, and pharmaceutical industries due to their antimicrobial and antioxidant properties." },
    { image: s5, title: "Moringa Capsules", description: "Essentially moringa powder encapsulated for easy consumption. Enjoy the health benefits of Moringa in a convenient, easy-to-consume form." },
    { image: s6, title: "Moringa Flower", description: "Another part of the Moringa tree that's edible and has health benefits. In some cultures, they're used in cooking for their unique flavor." },
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

  return (
    <div className="carousel-wrap ">
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
    </div>
  )
}
