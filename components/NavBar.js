'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'SmoothScroll' in window) {
      new window.SmoothScroll('a[href*="#"]');
    }
  }, []);

  return (
    <ul className="navbar-nav collapse">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#products" >Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about" >About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#achievements" >Achievements</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact" >Contact Us</a>
      </li>
    </ul>
  )
}
