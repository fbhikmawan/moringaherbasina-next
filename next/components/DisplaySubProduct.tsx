import React from "react";
import Link from 'next/link';
import { type SubProduct } from '@/type/product';  

import RotatingImageDisplay from '@/components/RotatingImageDisplay';

import './display-sub-product.css';

type DisplaySubProductProps = {
  product: SubProduct
}

export default function DisplaySubProduct({ product }: DisplaySubProductProps) {
  return (
    <div className="product-item m-3">
      <div className="card-sl">
        <RotatingImageDisplay images={product.images} />
        <a className="card-action" href={product.link}><i className="fa fa-shopping-cart"></i></a>
        <div className="card-heading">{product.title}</div>
        <div className="card-text">{product.source}</div>
        <Link href={product.link} className="card-button" target="_blank">Purchase</Link>
      </div>
    </div>
  );
}
