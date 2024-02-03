import React from 'react';
import Image from 'next/image';
import { Suspense } from 'react';

import { products } from '@/components/ProductList';
import Loading from './loading';
import ButtonProductCTA from '@/components/ButtonProductCTA';
import DisplayOGData from '@/components/DisplayOGData';

import './style.css';

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  const product = products.find(p => p.slug === params.slug);

  return {
    title: `${product.title} | ${previousTitle}`,
    description: product.longDesc,
  }
}

export default function ProductsName({params}) {
  const product = products.find(p => p.slug === params.slug);

  return (
    <div className="px-4 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-4 product-details-card">
            <div className="card-body">
              <div className="mb-4 text-center product-images">
                {product.images.map((image, index) => (
                  <div key={index} className="d-inline-block m-2 image-container">
                    <Image src={image} alt={product.title} className="rounded the-image" fill style={{ objectFit: 'contain' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
                  </div>
                ))}
              </div>
              <div className="mb-4 text-center product-description">
                <p className="card-text">{product.shortDesc}</p>
              </div>
              <div className="product-description">
                <p className="card-text">{product.longDesc}</p>
              </div>
              <div className="product-links">
                {product.productLinks.map((link, index) => (
                  <Suspense key={index} fallback={<Loading />}>
                    <DisplayOGData link={link} />
                  </Suspense>
                ))}
              </div>
              <div className="cta btn-box">
                <ButtonProductCTA product={product}>
                  Contact Us for Detail
                </ButtonProductCTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
