import React from "react";
import Link from 'next/link';

import RotatingImageDisplay from '@/components/RotatingImageDisplay';

import './display-sub-product.css';

export default function DisplaySubProduct({ product }) {
  const images = product.images.map(image => {
    // Use a regular expression to find the last occurrence of a period before any query parameters or fragments
    const match = image.match(/(.*)(\.\w+)(\?.*|#.*)?$/);
    let thumbnail;
    if (match) {
      // If a match is found, reconstruct the URL with "_tn" inserted before the extension
      thumbnail = `${match[1]}_tn${match[2]}${match[3] || ''}`;
    } else {
      // If no match is found (no extension), append "_tn" directly
      thumbnail = `${image}_tn`;
    }

    return {
      original: image,
      thumbnail: thumbnail,
    };
  });

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
