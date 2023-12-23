import React from 'react'
import ProductCarousel from '@/components/ProductCarousel'
import Link from 'next/link'

export default function ProductSection() {
  return (
    <section id="products" className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center ">
          <h2 className="">
            Discover the Power of Moringa
          </h2>
          <p className="col-lg-8 px-0">
          Unleash the potential of nature's most nutritious plant with our range of Moringa products. From the energizing Moringa Leaf Powder to the soothing Moringa Tea, the rejuvenating Moringa Oil to the potent Moringa Seeds, we've harnessed the benefits of this miracle tree in convenient and easy-to-use. 
          </p>
        </div>
        <div className="service_container">
          <ProductCarousel />
        </div>
        <div className="btn-box">
          <Link href="/services">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
