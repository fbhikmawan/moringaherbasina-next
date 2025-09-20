import React from 'react'
import Image from 'next/image'
import { type StaticImageData } from 'next/image';

type AchievementProps = {
  image: StaticImageData;
  name: string;
  resume: string; 
}

export default function Achievement({ image, name, resume }: AchievementProps) {
  return (
    <div className="col-12 col-md-6 mx-auto">
      <div className="box">
        <div className="img-box">
          <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw" />
        </div>
        <div className="detail-box">
          <h5>
            {name}
          </h5>
          <h6 dangerouslySetInnerHTML={{ __html: resume }}></h6>
        </div>
      </div>
    </div>
  )
}
