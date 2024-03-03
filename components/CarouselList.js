'use client'

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CustomCarousel({ children }){
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
    <Carousel {...carouselOptions}>
      {children}
    </Carousel>
  );
};
