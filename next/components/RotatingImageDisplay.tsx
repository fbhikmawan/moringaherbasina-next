'use client'

import React, { useState, useEffect } from 'react';
import Image, { type StaticImageData } from 'next/image';

import './rotating-image-display.css'; // CSS file for animation

interface RotatingImageDisplayProps {
  images: StaticImageData[];
}

export default function RotatingImageDisplay({ images }: RotatingImageDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change interval as needed

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="card-image">
      {images.map((image, index) => (
        <Image key={index} className={`${index == currentImageIndex ? 'active' : ''}`} src={image} alt={`Image ${index}`} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
      ))}
    </div>
  );
};