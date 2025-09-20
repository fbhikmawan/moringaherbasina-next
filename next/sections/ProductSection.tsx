import React from 'react'
import Link from 'next/link'

import ProductList from '@/components/ProductList'

import './product-section.scss'

type ProductSectionProps = { 
  layoutPadding?: boolean; 
  isTopPage?: boolean 
}

export default function ProductSection({ layoutPadding, isTopPage }: ProductSectionProps) {
  const paddingClass = layoutPadding ? "layout_padding" : '';

  return (
    <section id="products" className={`product_section ${paddingClass}`}>
      <div className="container-sm">
        <div className="heading_container heading_center ">
          <h2 className="">
            Discover the Power of Moringa
          </h2>
          <p className="col-lg-8 px-0">
          Unleash the potential of nature&apos;s most nutritious plant with our range of Moringa products. From the energizing Moringa Leaf Powder to the soothing Moringa Tea, the rejuvenating Moringa Oil to the potent Moringa Seeds, we&apos;ve harnessed the benefits of this miracle tree in convenient and easy-to-use. 
          </p>
        </div>
        <div className="service_container">
          <ProductList isTopPage={isTopPage ?? false} />
        </div>
        {isTopPage && (
          <div className="btn-box">
            <Link href="/products" prefetch={true}>
              See More Our Complete Catalogue
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
