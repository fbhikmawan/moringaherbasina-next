import React from 'react'
import Image from 'next/image'

export default function Achievement({ image, name, resume }) {
  return (
    <div className="col-12 col-md-6 mx-auto">
      <div className="box">
        <div className="img-box">
          <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="detail-box">
          <h5>
            {name}
          </h5>
          <h6 className="">
            {resume}
          </h6>
        </div>
      </div>
    </div>
  )
}
