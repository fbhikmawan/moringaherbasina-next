'use client'

import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function PhotoGallery({ images }){
  const imageItems = images.map((image) => ({
    original: image.url,
    thumbnail: image.url,
    description: image.description,
  }));

  return (
    <ImageGallery
      items={imageItems}
      showPlayButton={false}
      showFullscreenButton={false}
      showIndex={false}
      slideInterval={2000}
      swipeable={false}
    />
  );
};
