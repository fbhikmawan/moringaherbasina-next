import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { products } from '@/components/ProductList';
import { renderLineBreaks } from '@/services/utilities'
import ButtonProductCTA from '@/components/ButtonProductCTA';
import DisplaySubProduct from '@/components/DisplaySubProduct';
import BreadcrumbCustom from '@/components/BreadcrumbCustom';

import './style.css';

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: `Product Not Found | ${previousTitle}`,
      description: `Product ${params.slug} is not Found`,
    }
  }

  return {
    title: `${product.title} | ${previousTitle}`,
    description: product.shortDesc,
    openGraph: {
      images: ['/assets/images/og-logo.png'],
    },
  }
}

export default function ProductsName({params}) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  const breadcrumbItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: product.title, href: `/products/${product.slug}` },
  ];

  return (
    <div className="px-4 py-5">
      <div className="container-md card shadow p-4 p-lg-5 p-xl-6">
        <BreadcrumbCustom breadcrumbItems={breadcrumbItems} />
        <div className="col-12 mb-4 text-center product-images">
          {product.images.map((image, index) => (
            <div key={index} className="d-inline-block m-2 image-container">
              <Image src={image} alt={product.title} className="rounded the-image" fill style={{ objectFit: 'contain' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
            </div>
          ))}
        </div>
        <div className="col-12 mx-auto mb-4 text-center product-description short">
          <p className="h4 fw-bold">{renderLineBreaks(product.shortDesc)}</p>
        </div>
        <div className="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto product-description long">
          <p className="lead">{renderLineBreaks(product.longDesc)}</p>
        </div>
        <div className="col-12 product-subs">
          <div className="container mt-8">
            <div className="row justify-content-center">
              {product.subProducts.map((product, index) => (
                <DisplaySubProduct key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="cta btn-box">
          <ButtonProductCTA>
            Contact Us for Large Quantity Service
          </ButtonProductCTA>
        </div>
      </div>
    </div>
  )
}
