import React from 'react'
import Image from 'next/image'

export default function TeamMember({ image, name, role }) {
  return (
    <div className="col-md-4 col-sm-6 mx-auto">
      <div className="box">
        <div className="img-box">
          <Image src={image} alt={name} placeholder="blur" />
        </div>
        <div className="detail-box">
          <h5>
            {name}
          </h5>
          <h6 className="">
            {role}
          </h6>
        </div>
      </div>
    </div>
  )
}
