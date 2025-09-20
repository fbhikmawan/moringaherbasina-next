'use client'

import React from 'react';

import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type Image = {
  url: string;
  description: string;
}

type PhotoGalleryProps = {
  images: Image[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps){
  const imageItems: ReactImageGalleryItem[] = images.map((image) => ({
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
      disableSwipe={true}
    />
  );
};
