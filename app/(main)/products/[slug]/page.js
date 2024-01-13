import React from 'react';
import Image from 'next/image';

import { fetchWrapper } from '@/services/fetchWrapper';

import './style.css';

export default function ProductsName({params}) {
  const products = fetchWrapper('/api/products');
  const product = products.find(p => p.slug === params.slug);

  return (
    <div className="px-4 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-4 product-details-card">
            <div className="card-body">
              <div className="mb-4 text-center product-images">
                {product.images.map((image, index) => (
                  <div className="d-inline-block m-2 image-container">
                    <Image key={index} src={image} alt={product.title} className="rounded the-image" fill style={{ objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
              <div className="mb-4 text-center product-description">
                <p className="card-text">{product.shortDesc}</p>
              </div>
              <div className="text-center product-description">
                <p className="card-text">{product.longDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
