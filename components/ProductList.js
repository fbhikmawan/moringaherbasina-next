import React from 'react';
import Image from 'next/image';

import CarouselList from '@/components/CarouselList';
import { fetchWrapper } from '@/services/fetchWrapper';

const renderSliderLayout = (services) => {
  return (
    <CarouselList>
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
    </CarouselList>
  );
};

const renderBreakdownLayout = (services) => {
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

export default function ProductList({ isTopPage }) {
  const services = fetchWrapper('/api/products');

  return (
    <div className="carousel-wrap ">
      {isTopPage ? renderSliderLayout(services) : renderBreakdownLayout(services)}
    </div>
  )
}
