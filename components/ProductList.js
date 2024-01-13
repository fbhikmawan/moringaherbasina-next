import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CarouselList from '@/components/CarouselList';
import { fetchWrapper } from '@/services/fetchWrapper';

const renderSliderLayout = (products) => {
  return (
    <CarouselList>
      {products.map((product, index) => (
        <div className="item" key={index}>
          <div className="box ">
            <div className="img-box">
              <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="detail-box">
              <h5>
                {product.title}
              </h5>
              <p>
                {product.shortDesc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CarouselList>
  );
};

const renderBreakdownLayout = (products) => {
  return (
    <div className="row justify-content-center">
      {products.map((product, index) => (
        <Link href={`/products/${product.slug}`} className="col-12 col-lg-6 col-xl-4 item" key={index}>
          <div className="box ">
            <div className="img-box">
              <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="detail-box">
              <h5>
                {product.title}
              </h5>
              <p>
                {product.shortDesc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function ProductList({ isTopPage }) {
  const products = fetchWrapper('/api/products');

  return (
    <div className="carousel-wrap ">
      {isTopPage ? renderSliderLayout(products) : renderBreakdownLayout(products)}
    </div>
  )
}
